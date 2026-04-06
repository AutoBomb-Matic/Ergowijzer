const navLinks = document.querySelector(".nav-links");
const burgerMenu = document.querySelector(".burger-menu");
const links = document.querySelectorAll("a");


burgerMenu.addEventListener("click",function(){
    navLinks.classList.toggle("active");
});
links.forEach(link =>{
link.addEventListener("click",function(){
    navLinks.classList.remove("active");
})
});






