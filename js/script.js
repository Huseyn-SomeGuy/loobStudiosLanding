let hamburger = document.querySelector(".header__hamburger");
let navElements = document.querySelector(".nav__elements");
let nav = document.querySelector(".header__nav");
let icon = document.getElementById("icon");
icon
hamburger.addEventListener("click", () =>{
   // icon.src = "./img/icon-close.svg";
   // alert(icon.src);
   // nav.classList.toggle("show");
   // if(icon.src == "./img/icon-close.svg"){
   //    icon.src = "./img/icon-hamburger.svg";
   // }
   let fileName = icon.src.split("/").pop();
   if(fileName === "icon-hamburger.svg"){
      icon.src = "./img/icon-close.svg";
   }
   else{
      icon.src = "./img/icon-hamburger.svg";
   }
   nav.classList.toggle("show");
})














