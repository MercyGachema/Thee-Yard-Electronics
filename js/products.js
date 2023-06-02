let products = [
    {
        name: 'Laptops',
        image1: './images/img/luis-quintero-aUnkqeCvz80-unsplash.jpg',
        image2: './images/img/joshua-reddekopp-GkFQEOubrCo-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Motherboards',
        image1: './images/motherboard/prod1.jpg',
        image2: './images/motherboard/prod2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Watches',
        image1: './images/watch/simon-daoudi-2wFoa040m8g-unsplash.jpg',
        image2: './images/watch/lloyd-dirks-0vsk2_9dkqo-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Cameras',
        image1: './images/camera/gift-habeshaw-JlaHTZ_Rp7M-unsplash.jpg',
        image2: './images/camera/nihon-graphy-i0EQSk3sN3E-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Ring Light',
        image1: './images/ring/moreno-matkovic-R9Bso8GFLBQ-unsplash.jpg',
        image2: './images/ring/paolo-conversano-KHEdHkzMfqM-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },

    {
        name: 'Smart TVs',
        image1: './images/tv/nicolas-j-leclercq-qDLLP0yP7FU-unsplash.jpg',
        image2: './images/tv/nubelson-fernandes-AzHPen-cymc-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },

    {
        name: 'Gaming Pads',
        image1: './images/pads/gamer1.jpg',
        image2: './images/pads/martin-katler-caNzzoxls8Q-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },

    {
        name: 'Desktops',
        image1: './images/desktop/linus-mimietz-gvptKmonylk-unsplash.jpg',
        image2: './images/desktop/kirill-martynov-vhpD1Ikatwo-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },

    {
        name: 'Keyboards',
        image1: './images/keyboard/paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg',
        image2: './images/keyboard/amjith-s-NOY_FzRublM-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },

    {
        name: 'Mouse',
        image1: './images/mouse/brian-miner-x8yVFdU3JrI-unsplash.jpg',
        image2: './images/mouse/nubelson-fernandes-hlQi9J-ai3A-unsplash.jpg',
        old_price: '400',
        curr_price: '300'
    },




]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
            
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                        
                    </div>

                    <div class="product-card-info">

                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
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
    })
}

renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))