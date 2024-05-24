class Blog {
    title;
    imgHref;
    date;
    constructor(title, imgHref, date) {
        this.title = title;
        this.imgHref = imgHref;
        this.date = date;
    }
}

b1 = new Blog("May Infographic: Brain Cancer", "../img/blog/b1.png", "05-08-2024");
b2 = new Blog("Title2", "https://www.w3schools.com/howto/img_snow_wide.jpg", "5-16-2024");
b3 = new Blog("Title3", "https://www.w3schools.com/howto/img_snow_wide.jpg", "5-16-2024");
const blogs = [b1, b2, b3];

const bposts = document.querySelectorAll('.blog');
for(let i = 0; i < 3; i++) {
    let bimg = bposts[i].querySelector(".blogphoto");
    let btitle = bposts[i].querySelector(".blogtext");
    bimg.src = blogs[i].imgHref;
    btitle.textContent = blogs[i].title;
}