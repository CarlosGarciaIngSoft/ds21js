var timer=[];
let obj={};
var average=0;
function Names()
{
    for(var i=0;i<7;i++)
    {
        ti=performance.now();
        for(var j=0;j<100000;j++)
        {
            var number= Math.floor(Math.random()*100000)
            const add    = (key, value) => obj[key] = value
            add(j,"Name"+number)
        }
        tf=performance.now();
        time= tf-ti;
        timer[i]=time
    }
    var count=0;
    for(var c=0;c<7;c++)
    {
        count+= timer[c]
    }
    average= count/7;
    console.log(obj);
    console.log(average);
}
console.log(Names())