let navbar = document.createElement("nav");
navbar.setAttribute("class","flex-div");

let division1=document.createElement("div");
division1.setAttribute("class","nav-left");

let itag1=document.createElement("i");
itag1.setAttribute("class","fas fa-bars");

let itag2=document.createElement("i");
itag2.setAttribute("class","fab fa-youtube");

let division2=document.createElement("div");
division2.setAttribute("class","nav-middle");

let itag3=document.createElement("i");
let itag4=document.createElement("i");
let itag5=document.createElement("i");

let division3=document.createElement("div");
division3.setAttribute("class","nav-right");
let itag6=document.createElement("i");
itag6.setAttribute("class","fas fa-plus-square");
let itag7=document.createElement("i");
itag7.setAttribute("class","far fa-bell");
let imgtag1=document.createElement("img");
imgtag1.setAttribute("src","image/vijayakumar.jpg");
imgtag1.setAttribute("class","user-icon");

division1.append(itag1,itag2);
division2.append(itag3,itag4,itag5);
division3.append(itag6,itag7,imgtag1);
navbar.append(division1,division2,division3);
document.body.append(navbar);
