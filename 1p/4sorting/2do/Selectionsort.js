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
         selectionSort=function()
         {
             var array=numbers
             for(let o=0;o<array.length-1;o++)
             {
                 let indexMin=o;
                 for(let j=o+1;j<array.length;j++)
                 {
                     if(array[indexMin]>array[j])
                     {
                         indexMin=j;
                     }
                 }
                 const temp=array[o];
                 array[o]=array[indexMin];
                 array[indexMin]=temp;
                 steps++;
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
console.log("Elements of the array before sorting: "+numbers);
console.log("\n")
console.log("Sorted Array of elements: "+selectionSort());
console.log("\n")
console.log("Steps it took to sort: "+steps+ ". Time it took to sort in milliseconds: "+Time())