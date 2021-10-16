var array = [2,3,7,9,5,8,1,0,5];
var p= prompt("From what position do you wish to remove a value?")
if(p>array.length)
{
    alert("You cannot remove a value of a non-existant place")
}
else
{
    if(isNaN(p)==true)
    {
       alert("You cannot remove a value of a position under the id of "+p) 
    }
    else
    {
        console.log(array)
        array.splice(p,1)
        console.log(array)
    }
}