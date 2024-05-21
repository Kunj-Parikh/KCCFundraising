const hbgr = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hbgr.addEventListener('click', () => {
    hbgr.classList.toggle("active");
    menu.classList.toggle("active");
});

const imgLink = document.querySelector(".logoimg");
imgLink.addEventListener('click', () => {
    window.location.href = "https://kunj-parikh.github.io/KCCFundraising/HTML/index.html";
});
