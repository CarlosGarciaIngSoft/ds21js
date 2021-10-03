var n= prompt("Give me the number of elements you want me to print")
var c = 100*n;
var j = 2;
var cont=0;
var Primenumbers = [];

for (; j < c; j++) 
{
  if (primo(j) && cont<n) 
  {
    Primenumbers.push(j);
    cont++;
  }
}

console.log(Primenumbers);

function primo(number) 
{

  for (var i = 2; i < number; i++) 
  {
    if (number % i === 0) 
    {
      return false;
    }
  }
  return number !== 1;
}
