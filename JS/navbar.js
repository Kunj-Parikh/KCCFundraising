const hbgr = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hbgr.addEventListener('click', () => {
    hbgr.classList.toggle("active");
    menu.classList.toggle("active");
});