/**
 * Created by Administrator on 2017/5/15 0015.
 */
import * as $ from "jquery";
import * as Swiper from "swiper";
import LeftCategory from "./widgets/leftCategory";
class App{

    leftCategory:LeftCategory;

    constructor(){

    }

    public initApp(){
        this.leftCategory = new LeftCategory();
        this.leftCategory.initEvent();

        this.initStyle();
    }
    private initStyle(){

        // swiper stuff
        var swiper = new Swiper('.center-area-swiper', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            slidesPerView: 'auto',
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });

        var swiper2 = new Swiper('.right-news-swiper', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            slidesPerView: 'auto',
            autoplayDisableOnInteraction: false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });

        var swiper2 = new Swiper('.center-second-swiper', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            slidesPerView: 'auto',
            autoplayDisableOnInteraction: false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });

        // end swiper stuff
    }

}

$(function () {
    var app = new App();
    app.initApp();
});

// export default App
