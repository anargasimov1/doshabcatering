"use strict";
//    index.html
const title2 = document.getElementById("title2"),
    title1 = document.getElementById("title1"),
    btn_open = document.getElementById("btn"),
    btn_close = document.querySelector(".btn-danger"),
    navbar = document.getElementById("navbar");

setInterval(() => {
    title1.style.opacity = 0;
    title2.style.opacity = 1;

}, 3000)


setInterval(() => {
    title1.style.opacity = 1;
    title2.style.opacity = 0;

}, 6000)

btn_open.addEventListener("click", () => navbar.style.width = "100%")

btn_close.addEventListener("click", () => {
    navbar.style.width = "0"
})

//        about.html


