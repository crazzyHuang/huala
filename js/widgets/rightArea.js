/**
 * Created by Administrator on 2017/5/16 0016.
 */
!(function ($) {
    "use strict";
     var RightArea = function () {

         RightArea.prototype.initStyle = function () {

				$(".hotsell-cont-tab .hotsell-cont-head span").hover(function(){
					$(".hotsell-cont-tab .hotsell-cont-head span").removeClass("head-active");
					$(this).addClass("head-active");
				});

         };

         RightArea.prototype.initEvent = function () {

         };
         
     };
     

     window.RightArea = RightArea;

})(jQuery);