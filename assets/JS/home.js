// Document ready
$(function(){
    InitBannerSlider();
    FixedHeader();
})

function FixedHeader(){
    let headerContainer = $(".header_container");
    
    $(window).on("scroll", function(e){
        let target = e.target;
        let scrollTop = $(window).scrollTop();
        let headerControlPosition = $('.header_controls').position().top;
        
        if(scrollTop > headerControlPosition){
            headerContainer.addClass("fixedHeader");
        }else{
            headerContainer.removeClass("fixedHeader");
        }
    })
}


function InitBannerSlider(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        effect: 'fade',
        speed: 500,
        fadeEffect: {
            crossFade: true
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'
        }
    });
}


;(function () {
    const elementsToLoadIn = new Set([...document.querySelectorAll("section")]);
    elementsToLoadIn.forEach((el) => {
        el.classList.add('loadin');
    });

    let observerOptions = {
        root: null,
        rootMargin: '10px',
        threshold: 0.015
    }

    let observer = new IntersectionObserver(observerCallback, observerOptions);

    function observerCallback(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }

    elementsToLoadIn.forEach((el) => observer.observe(el));
})();



