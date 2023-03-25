// start of side navbar javascript
var navBtn = document.getElementById("nav-btn");
var sideMenu = document.getElementById("side-menu");

navBtn.addEventListener('click', function () {
    navBtn.style.boxShadow = "unset";
    if (sideMenu.classList.contains("active")) {
        hideSide();
    }
    else {
        showSide();
    }
});

function showSide() {
    document.body.style.paddingLeft = "300px";
    sideMenu.classList.add("active");
}
function hideSide() {
    document.body.style.paddingLeft = "0";
    sideMenu.classList.remove("active");
}
//end of navbar javascript

// start reveal animation for all sections on scroll
let reveals = document.querySelectorAll('.reveal'); // fixed
const windowHeight = window.innerHeight; // fixed
const revealPoint = 150;

window.addEventListener('scroll', function () {
    for (let i = 0; i < reveals.length; i++) {
        let revealTop = reveals[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) reveals[i].classList.add('active');
    }
});
// end of reveal animation for all sections on scroll



let products = [
    { name: 'shield conditioner', imageOne: '1-1.jpg', imageTwo: '1-2.jpg', price: 15, color: 'green', category: 'hairCare' },
    { name: 'shield shampoo', imageOne: '2-1.jpg', imageTwo: '2-2.jpg', price: 20, color: 'yellow', category: 'hairCare' },
    { name: 'shield spray', imageOne: '3-1.jpg', imageTwo: '3-2.jpg', price: 10, color: 'blue', category: 'hairCare' },
    { name: 'scalp moisturizing cream', imageOne: '4-1.jpg', imageTwo: '4-2.jpg', price: 25, color: 'gray', category: 'hairCare' },
    { name: 'hideaway mirror', imageOne: '5-1.jpg', imageTwo: '5-2.jpg', price: 11, color: 'blue', category: 'accessories' },
    { name: 'getaway travel case set', imageOne: '6-1.jpg', imageTwo: '6-2.jpg', price: 17, color: 'blue', category: 'accessories' },
    { name: 'sideway travel case set', imageOne: '7-1.jpg', imageTwo: '7-2.jpg', price: 22, color: 'yellow', category: 'accessories' },
    { name: 'detangling comb', imageOne: '8-1.jpg', imageTwo: '8-2.jpg', price: 35, color: 'blue', category: 'accessories' },
    { name: 'enriched hand & body wash', imageOne: '9-1.jpg', imageTwo: '9-2.jpg', price: 23, color: 'blue', category: 'bodyCare' },
    { name: 'enriched hand wash', imageOne: '10-1.jpg', imageTwo: '10-2.jpg', price: 90, color: 'gray', category: 'bodyCare' },
    { name: 'enriched duo', imageOne: '11-1.jpg', imageTwo: '11-2.jpg', price: 30, color: 'gray', category: 'bodyCare' },
    { name: 'natural coconut cleansing oil', imageOne: '12-1.jpg', imageTwo: '12-2.jpg', price: 20, color: 'blue', category: 'bodyCare' },
    { name: 'perfecting facial oil', imageOne: '13-1.jpg', imageTwo: '13-2.jpg', price: 19, color: 'yellow', category: 'skinCare' },
    { name: 'vital eye cream', imageOne: '14-1.jpg', imageTwo: '14-2.jpg', price: 36, color: 'gray', category: 'skinCare' },
    { name: 'supreme moisture mask', imageOne: '15-1.jpg', imageTwo: '15-2.jpg', price: 33, color: 'yellow', category: 'skinCare' },
    { name: 'supreme polishing treatment', imageOne: '16-1.jpg', imageTwo: '16-2.jpg', price: 60, color: 'gray', category: 'skinCare' }
]
let filter = document.getElementById('filter-link');
let filterContent = document.getElementById('filter-content');
let searchForProduct = document.getElementById('product-search');

searchForProduct.onkeyup = () => {
    productsData.innerHTML = `<div class="loading">
    <span class="loader"></span>
    </div>`;
    result = "";
    products.forEach(product => {
        if (product.name.includes(searchForProduct.value.toLowerCase())) {
            result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
        }
    });
    title.innerHTML = `search results for '${searchForProduct.value.toLowerCase()}'`;
    if(searchForProduct.value.startsWith(' ') || searchForProduct.value == ""){
        title.innerHTML = 'shop';
    }
    setTimeout(()=>{
        productsData.innerHTML = result;
        if(result == ""){
            productsData.innerHTML = `<h4 class="text-center">No search results found for '${searchForProduct.value}'</h4>`
        }
    },600);
}

filter.onclick = function (e) {
    e.preventDefault();
}
$(document).ready(function () {
    $("#filter-link").click(function () {
        $("#filter-content").slideToggle(400, 'linear');
    });
});

let productsData = document.getElementById('products');

let result = "";
products.forEach(product => {
    result += `
        <div class="col-md-6 col-lg-3 text-center mb-5">
        <div class="item position-relative">
        <div class="image-holder">
          <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
          <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
          <div class="icons position-absolute d-flex flex-column">
            <i class="fa-solid fa-bag-shopping"></i>
            <i class="fa-regular fa-eye"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
        </div>
        <div class="text">
          <p class="price mb-0">$${product.price}</p>
          <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="simple-para" id="simple-para">This is a simple product</p>
       <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
        </div>
      </div>
        </div>
    `
})
productsData.innerHTML = result;

//grid button =======================================================================
let gridBtn = document.getElementById('grid');
let columnBtn = document.getElementById('column');

function changeToGrid() {
    productsData.style.flexDirection = 'row';
    document.querySelectorAll('.add-to-cart').forEach(link => {
        link.style.display = 'none';
        link.style.marginTop = '1rem';
    });
    document.querySelectorAll('.simple-para').forEach(para => {
        para.style.display = 'none';
    });
    document.querySelectorAll('.products .item .image-holder').forEach(image => {
        image.style.width = "100%"
    });
    document.querySelectorAll('.products .col-md-6.col-lg-3').forEach(holder => {
        holder.style.width = '25%';
    });
    document.querySelectorAll('.products .item').forEach(item => {
        item.style.display = 'block';
    });
    document.querySelectorAll('.products .item .text').forEach(text => {
        text.style.textAlign = 'center';
        text.style.marginLeft = '0';
    });
    document.querySelectorAll('.products .item .text .price').forEach(price => {
        price.style.fontSize = '1rem';
    })
    document.querySelectorAll('#product-name').forEach(productName => {
        productName.style.fontSize = '0.9375rem';
        productName.style.fontWeight = '400';
    });
    document.querySelectorAll('.products .stars').forEach(ele => {
        ele.style.justifyContent = 'center';
    });
}

gridBtn.addEventListener('click', () => {
    productsData.innerHTML = `<div class="loading">
    <span class="loader"></span>
    </div>`;
    setTimeout(() => {
        productsData.innerHTML = result;
        changeToGrid();
    }, 600);

});

// column btn =====================================================================
function changeToColumn() {
    productsData.style.flexDirection = 'column';
    document.querySelectorAll('.add-to-cart').forEach(link => {
        link.style.display = 'inline-block';
        link.style.marginTop = '0';
    });
    document.querySelectorAll('.simple-para').forEach(para => {
        para.style.display = 'block';
    });
    document.querySelectorAll('.products .item .image-holder').forEach(image => {
        image.style.width = "50%"
    });
    document.querySelectorAll('.products .col-md-6.col-lg-3').forEach(holder => {
        holder.style.width = '50%';
    });
    document.querySelectorAll('.products .item').forEach(item => {
        item.style.display = 'flex';
        item.style.alignItems = 'center';
    });
    document.querySelectorAll('.products .item .text').forEach(text => {
        text.style.textAlign = 'left';
        text.style.marginLeft = '30px';
    });
    document.querySelectorAll('.products .item .text .price').forEach(price => {
        price.style.fontSize = '1.125rem';
    });
    document.querySelectorAll('#product-name').forEach(productName => {
        productName.style.fontSize = '1.5rem';
        productName.style.fontWeight = '500';
    });
    document.querySelectorAll('.products .stars').forEach(ele => {
        ele.style.justifyContent = 'flex-start';
    });
}
columnBtn.addEventListener('click', () => {
    productsData.innerHTML = `<div class="loading">
    <span class="loader"></span>
    </div>`;
    setTimeout(() => {
        productsData.innerHTML = result;
        changeToColumn();
    }, 600);
});

// filter functions ================================================================
let price1 = document.getElementById('price-1');
let price2 = document.getElementById('price-2');
let price3 = document.getElementById('price-3');
let price4 = document.getElementById('price-4');
let skinCat = document.getElementById('skin-cat');
let hairCat = document.getElementById('hair-cat');
let bodyCat = document.getElementById('body-cat');
let accessCat = document.getElementById('access-cat');
let colors = document.querySelectorAll('.filter-content .colors li:not(last-child) a');
let allProductsBtn = document.querySelectorAll('.all-products');
let title = document.querySelector('h1');

allProductsBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
        setTimeout(() => {
            result = "";
            products.forEach(product => {
                result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
            });
            productsData.innerHTML = result;
        }, 600);
        filterContent.style.display = 'none';
        title.innerHTML = 'Shop';
    });
});

price1.addEventListener('click', e => {
    e.preventDefault();
    productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
    setTimeout(() => {
        result = "";
        products.forEach(product => {
            if (product.price >= 10 && product.price <= 15) {
                result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
            }
        });
        productsData.innerHTML = result;
    }, 600);
    filterContent.style.display = 'none';
    title.innerHTML = 'Products between $10 - $15';
});

price2.addEventListener('click', e => {
    e.preventDefault();
    productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
    setTimeout(() => {
        result = "";
        products.forEach(product => {
            if (product.price >= 16 && product.price <= 30) {
                result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
            }
        });
        productsData.innerHTML = result;
    }, 600);
    filterContent.style.display = 'none';
    title.innerHTML = 'Products between $16 - $30';

});

price3.addEventListener('click', e => {
    e.preventDefault();
    productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
    setTimeout(() => {
        result = "";
        products.forEach(product => {
            if (product.price >= 31 && product.price <= 50) {
                result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
            }
        });
        productsData.innerHTML = result;
    }, 600);
    filterContent.style.display = 'none';
    title.innerHTML = 'Products between $31 - $50';

});

price4.addEventListener('click', e => {
    e.preventDefault();
    productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
    setTimeout(() => {
        result = "";
        products.forEach(product => {
            if (product.price > 50) {
                result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
            }
        });
        productsData.innerHTML = result;
    }, 600);
    filterContent.style.display = 'none';
    title.innerHTML = 'Products more than $50';

});

skinCat.addEventListener('click', e => {
    e.preventDefault();
    productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
    setTimeout(() => {
        result = "";
        products.forEach(product => {
            if (product.category == 'skinCare') {
                result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
            }
        });
        productsData.innerHTML = result;
    }, 600);
    filterContent.style.display = 'none';
    title.innerHTML = 'Skin Care products';

});

hairCat.addEventListener('click', e => {
    e.preventDefault();
    productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
    setTimeout(() => {
        result = "";
        products.forEach(product => {
            if (product.category == 'hairCare') {
                result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
            }
        });
        productsData.innerHTML = result;
    }, 600);

    filterContent.style.display = 'none';
    title.innerHTML = 'Hair Care products';
});

bodyCat.addEventListener('click', e => {
    e.preventDefault();
    productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
    setTimeout(() => {
        result = "";
        products.forEach(product => {
            if (product.category == 'bodyCare') {
                result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
            }
        });
        productsData.innerHTML = result;
    }, 600);
    filterContent.style.display = 'none';
    title.innerHTML = 'Body Care products';

});

accessCat.addEventListener('click', e => {
    e.preventDefault();
    productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
    setTimeout(() => {
        result = "";
        products.forEach(product => {
            if (product.category == 'accessories') {
                result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
            }
        });
        productsData.innerHTML = result;
    }, 600);
    filterContent.style.display = 'none';
    title.innerHTML = 'Accessories';

});

colors.forEach(color => {
    color.addEventListener('click', e => {
        e.preventDefault();
        productsData.innerHTML = `<div class="loading">
        <span class="loader"></span>
        </div>`;
        setTimeout(() => {
            result = "";
            products.forEach(product => {
                if (product.color == color.innerHTML.toLowerCase()) {
                    result += `
            <div class="col-md-6 col-lg-3 text-center mb-5">
                <div class="item position-relative">
                <div class="image-holder">
                <img src="assets/images/shop/${product.imageOne}" alt=${product.name}  />
                <img src="assets/images/shop/${product.imageTwo}" alt=${product.name} />
                <div class="icons position-absolute d-flex flex-column">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
                </div>
                <div class="text">
                <p class="price mb-0">$${product.price}</p>
                <a href="#" class="product-name text-capitalize" id="product-name">${product.name}</a>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="simple-para" id="simple-para">This is a simple product</p>
            <a href="#" class="add-to-cart text-capitalize" id="add-to-cart">add to cart</a>
                </div>
            </div>
                </div>
            `
                }
            });
            productsData.innerHTML = result;
        }, 600);
        filterContent.style.display = 'none';
        title.innerHTML = `${color.innerHTML} products`;

    });
});