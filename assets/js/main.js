// start of side navbar javascript
var navBtn = document.getElementById("nav-btn");
var sideMenu = document.getElementById("side-menu");
var res = window.document.querySelector('input#toggle-control');


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
// start of header slider javascript 
$('.header-carousel').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 14000,
    autoplayHoverPause: false
});
// best sellers slider
$('.best-sellers-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        992:{
            items:4,
        }
    }
});
// new arrivals slider
$('.new-arrivals-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        992:{
            items:4,
        }
    }
});
// end of sliders
// start reveal animation for all sections on scroll
let reveals = document.querySelectorAll('.reveal'); // fixed
const windowHeight = window.innerHeight; // fixed
const revealPoint = 150;

window.addEventListener('scroll', function(){
    for (let i = 0; i < reveals.length; i++) {
        let revealTop = reveals[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) reveals[i].classList.add('active');
    }
});
// end of reveal animation for all sections on scroll


