// ==UserScript==
// @name              mydrivers优惠商品信息
// @homepageURL       https://gitee.com/ageha/ad-block-filter
// @homepage          https://gitee.com/ageha/ad-block-filter
// @website           https://gitee.com/ageha/ad-block-filter
// @description       关闭mydrivers上硬广告
// @namespace         ageha.com/mydrivers
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.1.1
// @grant             none
// @include           *://*.mydrivers.com/*
// @updateURL         https://gitee.com/ageha/ad-block-filter/raw/master/mydrivers.com.user.js
// @downloadURL       https://gitee.com/ageha/ad-block-filter/raw/master/mydrivers.com.user.js
// @installURL        https://gitee.com/ageha/ad-block-filter/raw/master/mydrivers.com.user.js
// ==/UserScript==

(function () {
  var block = "商品信息>>";
  var flag = true;
  var divs = document.getElementsByClassName("news_info");
  
  for (var div of divs){
    var p_elemts = div.getElementsByTagName("p");
    for (var p_elemt of p_elemts){
      var b_elemts = p_elemt.getElementsByTagName("b");
      if (b_elemts && b_elemts.length > 0){
        for (var b_elemt of b_elemts){
          if (b_elemt.innerText.indexOf(block) > -1){
          	p_elemt.parentNode.removeChild(p_elemt);
            
            flag = false;
        		break;
          }
        }
      }
    }
    
    
    
    var div_elemts = div.getElementsByTagName("div");
    for (var div_elemt of div_elemts){
      var b_elemts = div_elemt.getElementsByTagName("b");
      if (b_elemts && b_elemts.length > 0){
        for (var b_elemt of b_elemts){
          if (b_elemt.innerText.indexOf(block) > -1){
          	div_elemt.parentNode.removeChild(div_elemt);
            flag = false;
        		break;
          }
        }
      }
    }
  }
  
  var iframe = document.getElementById("commentsiframe");
  iframe.parentNode.removeChild(iframe);
})();


