const menu = document.querySelector(".bx-menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible");
})