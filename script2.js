let x = document.getElementById("demo"); //single valued
let y = document.getElementsByClassName(" ") //multiple valued array form
let z = document.getElementsByTagName()  // array form
y[0].innerHTML=" ";
document.querySelector(" ") //can give id(#) class(.) tag(tagname)
document.querySelectorAll(" ") // all value returns
let a = document.getElementByid("demo").getAttribute("id")
let b = document.getElementByid("demo").setAttribute("class","democlass") // two attributes-> name and value
let r = document.getElementByid("demo").style.color="blue";
let s = document.createElement("h2")
let par = document.getElementsByTagName("body");               // everything in this code is camel case
par[0].append(s); 
//mouse event
function onmouse(){
    console.alert("hello");
}