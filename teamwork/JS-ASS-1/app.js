// Kodlar buraya yazılacak.

const header = document.querySelector(".header");
header.style.backgroundColor = "red";
header.style.color = "white";
header.style.textAlign = "center"; 
header.style.padding = "1.5rem";

const title = document.getElementById("title");
title.textContent = "Javascript Dom Assignment 1"

const navItem = document.querySelector(".nav-item");
navItem.style.display = "flex";
navItem.style.alignItems = "center"
navItem.style.justifyContent = "center"
navItem.style.gap = "30px"
navItem.style.listStyle = "none"

const userName = document.querySelector("#username");
userName.value = "Admin"
userName.disabled = true;

const password = document.querySelector("#password");
password.setAttribute("type", "text")
password.value = "1234";
password.disabled = true;

const button = document.querySelector(".btn");
button.textContent = "Giriş Yap";
button.style.backgroundColor = "greenyellow";
button.style.padding = "10px 5px"
button.style.borderRadius = "10px"
button.style.border = "none"

const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];
const projects = document.getElementById("projects");
projects.firstElementChild.textContent = "Js Dom Projects"
projects.lastElementChild.innerHTML = myProjects.reduce((acc, n) => acc+"<li>"+n+"</li>", "");

