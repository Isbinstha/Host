document.getElementById("parent").innerHTML=("My name is Isbin Shrestha.");
// document.getElementById("parent").style.backgroundColor=("black");
// document.getElementById("parent").style.color=("white");
document.getElementById("parent").style.cssText=("background-color:green; color:black; text-align:center");
document.getElementsByClassName("parent1")[0].style.cssText=("background-color:green; color:black; text-align:center");
document.getElementsByClassName("exercise")[2].innerHTML=("I AM NUMBER 3");
document.getElementsByClassName("exercise")[2].style.cssText=("color:red; font-size:25px; font-weight:bold");
document.getElementsByTagName("h1")[1].style.cssText=("background-color:pink; color:white");
document.querySelector("h2").style.cssText=("background-color:blue; color:red; text-align:center");
document.querySelector("#hi").style.cssText=("background-color:red; color:blue; text-align:center");
document.querySelector(".hey").style.cssText=("background-color:black; color:blue; text-align:center");

const change = document.querySelectorAll("h3");
for (i=0;i<=change.length;i++){
    change[i].innerHTML=("I am Isbin shrestha");
    change[i].style.cssText=("color:red; font-size:25px");
}

function myfunction(){
   document.open();
   document.write("<h1>Hello World</h1>")
   document.close(); 
}

