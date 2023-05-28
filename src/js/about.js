"use strict"

const btnopen = document.querySelector(".btn-danger"),
    btnclose = document.querySelector(".btn-dark"),
    navbar_about = document.querySelector(".navbar");

 btnclose.addEventListener("click", ()=>{
    navbar_about.style.display = "block!important";
    console.log("salam")
 })
 