let slide_index = 0 // is a variable that keeps track of the current slide index. It is initialized to 0.
let slide_play = true // is a boolean variable that determines whether the slides should play automatically or not
let slides = document.querySelectorAll('.slide') // is a NodeList that contains all elements with the class name 'slide'. It uses the document.querySelectorAll() method to select these elements.


// is a function that iterates over all elements in the slides NodeList and removes the class 'active' from each element. 
// This function effectively hides all the slides by removing the 'active' class from them

hideAllSlide = () => 
{
    slides.forEach(e => 
        {
        e.classList.remove('active')
        })
}



showSlide = () => // function is defined using arrow function syntax
{
    hideAllSlide() // removes the 'active' class from all slide elements, effectively hiding them
    slides[slide_index].classList.add('active') // then shows the specific slide indicated by the slide_index by adding the 'active' class to its element
}


// The nextSlide function increments the slide_index by 1, wrapping around to the first slide if the current slide is the last one
// The ternary operator ? is used to check if slide_index + 1 is equal to slides.length
nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1


// prevSlide function decrements the slide_index by 1, wrapping around to the last slide if the current slide is the first one
prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1


// The document.querySelector('.slider') expression selects the first element in the document that has the class 'slider'
//addEventListener method is called on the selected element to attach an event listener.
// By setting slide_play to false when the mouse is over the slider element, this code potentially pauses the automatic slide playback
// pause slide when hover slider
document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)


// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)


// slider controll
document.querySelector('.slide-next').addEventListener('click', () => 
{
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide() // displays the initial slide based on the current value of slide_index

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products


let products = [
    {
        name: 'Desktops',
        image1: './images/desktop/kirill-martynov-vhpD1Ikatwo-unsplash.jpg',
        image2: './images/desktop/linus-mimietz-gvptKmonylk-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },
    
    {
        name: 'Gaming Pads',
        image1: './images/pads/martin-katler-caNzzoxls8Q-unsplash.jpg',
        image2: './images/pads/ugur-akdemir-5X39cfzKX3o-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },
    
    {
        name: 'Mouse',
        image1: './images/mouse/nubelson-fernandes-hlQi9J-ai3A-unsplash.jpg',
        image2: './images/mouse/brian-miner-x8yVFdU3JrI-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Phones',
        image1: './images/phones/14promax.jpg',
        image2: './images/phones/prod4.jpg',
        old_price: '400',
        curr_price: '300'
    },
]





//selects the first element in the document that has the ID 'latest-products'.
//The selected element is assigned to the variable product_list
let product_list = document.querySelector('#latest-products')
let gaming_pads_list = document.querySelector('#gaming-pads-list');
let mouse_list = document.querySelector('#mouse-list');
let phones_list = document.querySelector('#phone-list');


//let best_product_list = document.querySelector('#best-products')




//'col-3' indicates that each product card should occupy three columns in a grid layout on all screen sizes.'col-md-6' indicates that each product card should occupy six columns in a grid layout on medium-sized screens (usually tablets).'col-sm-12' indicates that each product card should occupy twelve columns in a grid layout on small screens (usually mobile devices)
// ...existing code...

//selects the first element in the document that has the ID 'gaming-pads-list' and 'mouse-list'
//The selected elements are assigned to the variables gaming_pads_list and mouse_list

// ...existing code...

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12"> 
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>

                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>

                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span> 
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    product_list.insertAdjacentHTML("beforeend", prod);

    // Check the product category and insert the product into the respective section
    if (e.name === 'Gaming Pads') {
        gaming_pads_list.insertAdjacentHTML("beforeend", prod);} 
        
        else if (e.name === 'Mouse') {
        mouse_list.insertAdjacentHTML("beforeend", prod);}

        else if (e.name === 'Phones') {
            phones_List.insertAdjacentHTML("beforeend", prod);
          }


});

// ...existing code...



