// ==UserScript==
// @name              Block ithome ads
// @homepageURL       https://gitee.com/ageha/ad-block-filter
// @homepage          https://gitee.com/ageha/ad-block-filter
// @website           https://gitee.com/ageha/ad-block-filter
// @description       关闭ithome上辣品链接
// @namespace         ageha.com/ithome
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.1.1
// @grant             none
// @include           *://www.ithome.com/*
// @updateURL         https://gitee.com/ageha/ad-block-filter/raw/master/ithome.com.user.js
// @downloadURL       https://gitee.com/ageha/ad-block-filter/raw/master/ithome.com.user.js
// @installURL        https://gitee.com/ageha/ad-block-filter/raw/master/ithome.com.user.js
// ==/UserScript==

(function () {
  var lis = document.getElementsByTagName("li");
  var li_block = new Array();
  var idx = 0;
  for(var li of lis){
    if(li.innerHTML.indexOf("lapin") > -1){
      li_block[idx++] = li;
    }
  }
  for(var li of li_block){
    li.parentNode.removeChild(li);
  }

})();