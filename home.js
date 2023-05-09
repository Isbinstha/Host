function myfunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light mode";
    }else{
        button.textContent="Dark mode";
    }
}

const textchange = document.querySelector("#class");
const values = ["a developer", "a student"," a designer"];
let counter = 0;
setInterval(()=>{
    textchange.textContent = values[counter];
    counter = (counter+1) % values.length;
},1000);