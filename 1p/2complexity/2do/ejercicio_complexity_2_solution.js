var n=prompt("Give me an integer for it to create a random number")
if(isNaN(n)==false || n<0 )
{
    function Ran_value() 
    {
    j= Math.floor(Math.random()*n)
    return j;
    }
console.log(Ran_value())
}
else
{
    alert("Your input is incorrect")
}

