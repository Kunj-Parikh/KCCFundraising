class Blog {
    title;
    imgHref;
    // TEXT HAS TO BE IN <p> TAG AND EVERY LINE BREAK HAS TO BE DENOTED BY <br>
    text;

    constructor(title, imgHref, text) {
        this.title = title;
        this.imgHref = imgHref;
        this.text = text;
    }

}
const blogBody = document.querySelector("#wf");
const blogBody2 = document.querySelector("#infog");


// WEEKLY FACTS

b1 = new Blog("Weekly Fact 4/1/24", "../img/blog/wf/4241.jpg", "Cancer is one of the largest health problems worldwide. A study from The Global Burden of Disease organization estimates that in 2019, there have been an estimate of 10 million deaths that were caused by cancer.<br></br> In order to help this cause, we aim to spread awareness about cancer and to help raise money towards cancer research. By providing a stable foundation of education, a cure may be discovered. Do your part to help fight cancer and donate to cancer research. <br></br>To help support the American Cancer Society click the link in our bio.");
b2 = new Blog("Weekly Fact 4/8/24", "../img/blog/wf/4242.jpg", "New studies show that many cancers that are acquired can be prevented through the maintaining of a healthy lifestyle. Yet there are still a huge amount of cancers that aren't dependant on lifestyle yet on mutations of the cells themselves. Unfortunately, we do not know much about about these cancers and they need to be further investigated. In order to help scientists learn more about cancer, help by donating to the American Cancer Society. <br></br>To help support the American Cancer Society click the link in our bio.");
b3 = new Blog("Weekly Fact 4/15/24", "../img/blog/wf/4243.jpg", "Scientists have made discoveries about cancer and cancer treatment through naked mole rats! This species have allowed for research to focus on different aspects in order to find treatment and a cure for cancer. Through research scientists explore the hyaluronan sugar and it's purpose against cancer. Help scientists further explore this phenomenon by clicking the links in our bio and donating to the American Cancer Society.");
b4 = new Blog("Weekly Fact 4/22/24", "../img/blog/wf/4244.jpg", "While some may not suspect cancer to be such an old disease, it actually dates back to Ancient Egypt. While our knowledge of cancer has significantly increased since then, we still don't know so much about it.<br></br>Today, scientists are eagerly trying investigate cancer to help find a cure for it. In order to help with the research, use the links in our bio to help donate to the American Cancer Society.");

b5 = new Blog("Weekly Fact 5/5/24", "../img/blog/wf/5241.jpg", "This month get ready for all weekly facts to be myth busters. We are going to see if all popular cancer myths are true or false. Let's help spread true information about cancer!!");
b6 = new Blog("Weekly Fact 5/6/24", "../img/blog/wf/5242.jpg", "Myth busted!<br><br>Microwaving food in plastic containers doesn't release cancer-causing substances! * While some plastics can leach chemicals when melted, none are linked to cancer. # So, keep calm and carry on, just remember to check those labels!<br><br>Donate through the links in our bio to further cancer research!");
b7 = new Blog("Weekly Fact 5/17/24", "../img/blog/wf/5243.jpg", "Deodorants can cause breast cancer? MYTH! No conclusive data links deodorants to breast cancer, despite containing chemicals like aluminum compounds.<br></br>This myth arose from unreliable memory-based case-control studies.");
b8 = new Blog("Weekly Fact 5/22/24", "../img/blog/wf/5244.png", "Too much makeup causes breast cancer? MYTH! Recent studies debunk the link between parabens in cosmetics and cancer. Keep shining safely!");
b9 = new Blog("Weekly Fact 5/28/24", "../img/blog/wf/5245.jpg", "ls cancer treatment worse than the disease itself? No, that's a myth!<br><br>Recent advancements in drug and radiation therapy have significantly improved cancer treatment worldwide. Side effects like nausea, vomiting, and hair loss are much less common now compared to the past.");

b10 = new Blog("Weekly Fact 6/3/24 Pt. 1", "../img/blog/wf/6241.jpg", "GET READY SINCE this month all our facts will be related to careers and jobs that relate to cancer and its treatment!");
b11 = new Blog("Weekly Fact 6/3/24 Pt. 2", "../img/blog/wf/6242.jpg", "Radiologists and radiation oncologists team up to fight cancer!<br><br>From advanced imaging to targeted radiation therapy, they provide top-notch care.");
b12 = new Blog("Weekly Fact 6/10/24", "../img/blog/wf/6243.jpg", "Behind every successful operation is a team of unsung heroes. Medical assistants are the backbone, providing patient care and support every step of the way. 💉❤️");
b13 = new Blog("Weekly Fact 6/17/24", "../img/blog/wf/6244.jpg", "Celebrating out incredible oncology registered nurses who provide compassionate care every step of the way. From easing the pain during treatments to managing slide effects and keeping families informed, their dedication is unwavering. Thank you for being the heart of patient care.");

b14 = new Blog("Weekly Fact 7/9/24", "../img/blog/wf/7241.jpg", "Together, we can make a difference in the fight against cancer. 🌍 The international community is uniting to strengthen cancer control and make it a global health priority. Let's raise awareness and support efforts to combat this disease worldwide. 💪");
b15 = new Blog("Weekly Fact 7/16/24", "../img/blog/wf/7242.jpg", "Hey! If you're into YouTube, you'll love eMedTV! It's a great resource for anyone wanting to learn more about cancer. Check it out and hit that follow button @eMedTV! 🎬📖👩‍⚕️");
b16 = new Blog("Weekly Fact 7/23/24", "../img/blog/wf/7243.jpg", "Attention gamers! Team up with 1UpOnCancer, a charitable organization dedicated to aiding U.S. adults in cancer treatment. Discover how you can contribute or become part of their supportive community at <a href='https://www.1uponcancer.org/' style='text-decoration: underline;'>1uponcancer.org</a>.");

// INFOGRAPHICS
i1 = new Blog("May Infographic: Brain Cancer", "../img/blog/infog/524.png", "Go Gray in May! <br><br>In order to raise awareness, each month an infographic will be put up. This month's discusses brain cancer. <br><br>Help raise awareness one neuron at a time. 💡 <br><br>Fight against brain cancer with knowledge and hope.");
i2 = new Blog("Cancer Survivors", "../img/blog/infog/624.jpg", "Celebrating the strength and resilience of cancer survivors. Every story is a testament to hope, courage, and the power of community.");
i3 = new Blog("Leiomyosarcoma", "../img/blog/infog/724.jpg", "Raising awareness for leiomyosarcoma: a rare and aggressive form of cancer. Early detection and research are key. Let's support those fighting this battle and work towards a cure. 💪🎗️");

const wf = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16];
const infog = [i1,i2,i3];

function createBlogPost(iterator, arr, bb, type) {
    let divPost = document.createElement("div");
    divPost.classList.add("post");
    divPost.setAttribute('id', `${type}${iterator+1}`);
    
    let postImg = document.createElement("img");
    postImg.classList.add("blogImage");
    postImg.src = arr[iterator].imgHref;
    postImg.setAttribute("onclick", "window.open(this.src, '_blank');");

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
