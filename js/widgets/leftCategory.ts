/**
 * Created by Administrator on 2017/5/15 0015.
 */
import  * as $ from "jquery"
 class LeftCategory{
    initEvent(){

        $("#login").on("click",function () {
            alert(1);
        })

        // $(".goods-category-detail li").hover(function (e) {
        //     $(this).addClass("goods-category-detail");
        // })
    }
}

export default LeftCategory