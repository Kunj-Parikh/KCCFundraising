class Blog{
    title;
    imgHref;
    date;
    // TEXT HAS TO BE IN <p> TAG AND EVERY LINE BREAK HAS TO BE DENOTED BY <br>
    text;

    constructor(title, imgHref, date, text) {
        this.title = title;
        this.imgHref = imgHref;
        this.date = date;
        this.text = text;
    }

}
const blogBody = document.querySelector(".main");

b1 = new Blog("May Infographic: Brain Cancer", "../img/blog/b1.png", "05-08-2024", "Go Gray in May! <br><br>In order to raise awareness, each month an infographic will be put up. This month's discusses brain cancer. <br><br>Help raise awareness one neuron at a time. 💡 <br><br>Fight against brain cancer with knowledge and hope.");
b2 = new Blog("Title2", "https://www.w3schools.com/howto/img_snow_wide.jpg", "5-16-2024", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a dignissimos quasi quibusdam, facere iste saepe provident quae dicta inventore delectus blanditiis. Facere alias officiis cum culpa voluptate possimus, iusto deleniti temporibus explicabo veritatis incidunt exercitationem eligendi quas rerum doloribus cumque quis qui! Repellat, aliquid?");
b3 = new Blog("Title3", "https://www.w3schools.com/howto/img_snow_wide.jpg", "5-16-2024", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a dignissimos quasi quibusdam, facere iste saepe provident quae dicta inventore delectus blanditiis. Facere alias officiis cum culpa voluptate possimus, iusto deleniti temporibus explicabo veritatis incidunt exercitationem eligendi quas rerum doloribus cumque quis qui! Repellat, aliquid?");
const blogs = [b1, b2, b3];
function addBlogs() {
    for(let i = 0; i < blogs.length; i++) {

        let divPost = document.createElement("div");
        divPost.classList.add("post");
        divPost.setAttribute('id', `post${i+1}`);
        
        let postImg = document.createElement("img");
        postImg.classList.add("blogImage");
        postImg.src = blogs[i].imgHref;

        let imgWrap = document.createElement("div");
        imgWrap.classList.add("centerImage");
        imgWrap.appendChild(postImg);

        divPost.appendChild(imgWrap);
        
        let divContainer = document.createElement("div");
        divContainer.classList.add('container');
    
        // let h2Title = document.createElement("H2").classList.add('btitle');
        // let h2Text = document.createTextNode(blogs[i].title);
        // h2Title.appendChild(h2Text);

        const h2title = document.createElement("H2");
        h2title.classList.add('btitle');
        const textNode = document.createTextNode(blogs[i].title);
        h2title.appendChild(textNode);
    
        let pElem = document.createElement('div');
        pElem.classList.add('btext');
        // let pText = document.createTextNode(blogs[i].text);
        pElem.innerHTML = blogs[i].text;
        // pElem.appendChild(pText);
    
        divContainer.appendChild(h2title);
        divContainer.appendChild(pElem);
    
        divPost.appendChild(divContainer);
        blogBody.appendChild(divPost);
    }
    
    
}
addBlogs();
