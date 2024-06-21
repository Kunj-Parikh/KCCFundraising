class Blog {
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
const blogBody = document.querySelector("#wf");
const blogBody2 = document.querySelector("#infog");


// WEEKLY FACTS

b1 = new Blog("May Infographic: Brain Cancer", "../img/blog/b1.png", "05-08-2024", "Go Gray in May! <br><br>In order to raise awareness, each month an infographic will be put up. This month's discusses brain cancer. <br><br>Help raise awareness one neuron at a time. 💡 <br><br>Fight against brain cancer with knowledge and hope.");
b2 = new Blog("Title2", "https://www.w3schools.com/howto/img_snow_wide.jpg", "5-16-2024", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a dignissimos quasi quibusdam, facere iste saepe provident quae dicta inventore delectus blanditiis. Facere alias officiis cum culpa voluptate possimus, iusto deleniti temporibus explicabo veritatis incidunt exercitationem eligendi quas rerum doloribus cumque quis qui! Repellat, aliquid?");
b3 = new Blog("Title3", "https://www.w3schools.com/howto/img_snow_wide.jpg", "5-16-2024", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a dignissimos quasi quibusdam, facere iste saepe provident quae dicta inventore delectus blanditiis. Facere alias officiis cum culpa voluptate possimus, iusto deleniti temporibus explicabo veritatis incidunt exercitationem eligendi quas rerum doloribus cumque quis qui! Repellat, aliquid?");
b4 = new Blog("May Infographic: Brain Cancer", "../img/blog/b1.png", "05-08-2024", "Go Gray in May! <br><br>In order to raise awareness, each month an infographic will be put up. This month's discusses brain cancer. <br><br>Help raise awareness one neuron at a time. 💡 <br><br>Fight against brain cancer with knowledge and hope.");
b5 = new Blog("May Infographic: Brain Cancer", "../img/blog/b1.png", "05-08-2024", "Go Gray in May! <br><br>In order to raise awareness, each month an infographic will be put up. This month's discusses brain cancer. <br><br>Help raise awareness one neuron at a time. 💡 <br><br>Fight against brain cancer with knowledge and hope.");


// INFOGRAPHICS

i1 = new Blog("Title3", "https://www.w3schools.com/howto/img_snow_wide.jpg", "5-16-2024", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a dignissimos quasi quibusdam, facere iste saepe provident quae dicta inventore delectus blanditiis. Facere alias officiis cum culpa voluptate possimus, iusto deleniti temporibus explicabo veritatis incidunt exercitationem eligendi quas rerum doloribus cumque quis qui! Repellat, aliquid?");
i2 = new Blog("May Infographic: Brain Cancer", "../img/blog/b1.png", "05-08-2024", "Go Gray in May! <br><br>In order to raise awareness, each month an infographic will be put up. This month's discusses brain cancer. <br><br>Help raise awareness one neuron at a time. 💡 <br><br>Fight against brain cancer with knowledge and hope.");
i3 = new Blog("May Infographic: Brain Cancer", "../img/blog/b1.png", "05-08-2024", "Go Gray in May! <br><br>In order to raise awareness, each month an infographic will be put up. This month's discusses brain cancer. <br><br>Help raise awareness one neuron at a time. 💡 <br><br>Fight against brain cancer with knowledge and hope.");

const wf = [b1, b2, b3, b4,b5];
const infog = [i1,i2,i3];

function createBlogPost(iterator, arr, bb, type) {
    let divPost = document.createElement("div");
    divPost.classList.add("post");
    divPost.setAttribute('id', `${type}${iterator+1}`);
    
    let postImg = document.createElement("img");
    postImg.classList.add("blogImage");
    postImg.src = arr[iterator].imgHref;

    let imgWrap = document.createElement("div");
    imgWrap.classList.add("centerImage");
    imgWrap.appendChild(postImg);

    divPost.appendChild(imgWrap);
    
    let divContainer = document.createElement("div");
    divContainer.classList.add('container');

    const h2title = document.createElement("H2");
    h2title.classList.add('btitle');
    const textNode = document.createTextNode(arr[iterator].title);
    h2title.appendChild(textNode);

    let pElem = document.createElement('div');
    pElem.classList.add('btext');

    pElem.innerHTML = arr[iterator].text;

    divContainer.appendChild(h2title);
    divContainer.appendChild(pElem);

    divPost.appendChild(divContainer);
    bb.appendChild(divPost);
}

function addBlogs() {
    for(let i = 0; i < wf.length; i++) {
        createBlogPost(i, wf, blogBody, "wf");
    }
    for(let i = 0; i < infog.length; i++) {
        createBlogPost(i, infog, blogBody2, "infog");
    }
}
addBlogs();
