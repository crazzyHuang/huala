/**
 * Created by Administrator on 2017/5/15 0015.
 */

!(function ($) {
    "use strict";
    var Category = function () {

        Category.prototype.initStyle = function () {

        };

        Category.prototype.initEvent = function () {
            $(".goods-category-detail li").hover(function (event) {
                var onObj = $(this).addClass("goods-category-detail-on");
                var offObj =onObj.siblings().removeClass("goods-category-detail-on");
                onObj.find('a').addClass("goods-category-detail-a-on");
                offObj.find('a').removeClass("goods-category-detail-a-on");
            });
        }
        
    };

    window.Category = Category;

})(jQuery);