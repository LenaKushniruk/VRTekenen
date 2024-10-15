const cursor = document.getElementById("js--cursor");
let i = 0;

//Spheres
const redSphere = document.getElementById("js--sphere--red");
redSphere.onmouseleave = function(){
    cursor.setAttribute("color", "red");
}

const greenSphere = document.getElementById("js--sphere--green");
greenSphere.onmouseleave = function(){
    cursor.setAttribute("color","green");
}

const blueSphere = document.getElementById("js--sphere--blue");
blueSphere.onmouseleave = function(){
    cursor.setAttribute("color","blue");
}

const boxes = document.getElementsByClassName("js--box");

for(let i = 0; i < boxes.length; i++){
   boxes[i].onmouseenter = function(){
    boxes[i].setAttribute("color",cursor.getAttribute("color"));
   }
}

