var numbers=[];
var steps=0
var t0=performance.now();
     function sack(num)
     {  
     return num=Math.floor(Math.random()*10000)
     }
         for(i=0;i<10000;i++)
         {  
         numbers[i]=sack();
         }
         var swap=function(array,index1,index2)
         {
             var aux= array[index1]
             array[index1]=array[index2]
             array[index2]=aux 
             steps++
         }
         bubbleSort=function()
         {
             var array=numbers
             var length=array.length;
             for(let o=0;o<length;o++)
             {
                 for(let j=0;j<length-1;j++)
                 {
                     if(array[j]>array[j+1])
                     {
                         swap(array,j,j+1);
                     }
                 }
             }
             return array;
         }    
         function Time(T0,T1)
         {
            var T0=t0;
            var T1=t1;
            return time=T1-T0;
         }
var t1=performance.now(); 
console.log("Elements of the array before sorting: "+[numbers]);
console.log("\n")
console.log("Sorted Array of elements: "+bubbleSort());
console.log("Steps it took to sort: "+steps+ ". Time it took to sort in milliseconds: "+Time())