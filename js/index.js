let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'Laptops',
        image1: './images/img/mohammadreza-alidoost-joQdhwKZlJE-unsplash.jpg',
        image2: './images/img/joshua-reddekopp-GkFQEOubrCo-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Desktop',
        image1: './images/desktop/kirill-martynov-vhpD1Ikatwo-unsplash.jpg',
        image2: './images/desktop/linus-mimietz-gvptKmonylk-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Desktop',
        image1: './images/desktop/redd-f-lzT0nimx--s-unsplash.jpg',
        image2: './images/desktop/sora-sagano-WFSap6CIXuw-unsplash.jpg',
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
        name: 'Gaming Pads',
        image1: './images/pads/nikita-kachanovsky-FJFPuE1MAOM-unsplash.jpg',
        image2: './images/pads/nikita-kachanovsky-mwytIca3qNA-unsplash.jpg',
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
        name: 'Mouse',
        image1: './images/mouse/shuttergames-7a81DTNvhIk-unsplash.jpg',
        image2: './images/mouse/ravi-palwe-TR6ZNWCsG38-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

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
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})


