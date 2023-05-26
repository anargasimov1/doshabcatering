"use strict";

const title2 = document.getElementById("title2"),
    title1 = document.getElementById("title1");

setInterval(() => {
    title1.style.opacity = 0;
    title2.style.opacity = 1;
 
}, 3000)


setInterval(() => {
    title1.style.opacity = 1;
    title2.style.opacity = 0;

}, 6000)