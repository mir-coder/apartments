class SwiperSlider {
    constructor(selector, options) {
        this.swiper = new Swiper(selector, options);
    }
}

export class MySwiper extends SwiperSlider {
    constructor() {
        const options = {
            loop:true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 5000,
            },
            // navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // },
            keyboard: true,
        };
        super(".mySwiper", options);
    }
}