function Stack()
{
    this.DataOfStore=[]
    this.top=0
    this.push=push
    this.pop=pop
    this.peek=peek
    this.clear=clear
    this.length=length
}
function push(element)
{
    this.DataOfStore[this.top++]=element
}
function peek()
{
    return this.DataOfStore[this.top-1]
}
function pop()
{
    return this.DataOfStore[--this.top]
}
function clear()
{
    this.top=0
}
function length()
{
    return this.top
}
//Program testing 
var Pueblos_Magicos= new Stack()
Pueblos_Magicos.push("Comala, Colima")
Pueblos_Magicos.push("Lagos de Moreno, Jalisco")
Pueblos_Magicos.push("Mier, Tamaulipas")
Pueblos_Magicos.push("Metepec, México")
console.log("length: "+Pueblos_Magicos.length())
console.log(Pueblos_Magicos.peek())
var popped=Pueblos_Magicos.pop()
console.log("Element popped is: "+popped)
console.log(Pueblos_Magicos.peek())
Pueblos_Magicos.push("Valle de Bravo, México")
console.log(Pueblos_Magicos.peek())
Pueblos_Magicos.clear()
console.log("Length: "+Pueblos_Magicos.length())
console.log(Pueblos_Magicos.peek())
Pueblos_Magicos.push("Tecate, Baja California")
console.log(Pueblos_Magicos.peek())