/**
 * Created by Administrator on 2017/5/15 0015.
 */
import  * as $ from "jquery"
class LeftCategory {

    initEvent() {
        $(".goods-category-detail li").hover(function (event: JQueryEventObject) {
            var onObj = $(this).addClass("goods-category-detail-on");
            var offObj =onObj.siblings().removeClass("goods-category-detail-on");
            onObj.find('a').addClass("goods-category-detail-a-on");
            offObj.find('a').removeClass("goods-category-detail-a-on");


            // goods-category-detail li:hover > a


        })
    }
}

export default LeftCategory