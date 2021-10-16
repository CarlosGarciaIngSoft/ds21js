var array = [2,3,7,9,5,8,1,0,5];
var v= prompt("What number would you like to add?")
var p= prompt("Where would you like to add it?")
if(p>array.length|| isNaN(p)==true)
{
    alert("Position no valid")
}
else
{
    if(isNaN(v)==false)
    {
        console.log(array)
        array.splice(p,0,v)
        console.log(array)
    }
    else
    {
        alert("You can only add numbers to this array")
    }
}