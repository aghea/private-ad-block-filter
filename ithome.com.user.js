// ==UserScript==
// @name              Block ithome ads
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @description       关闭ithome上辣品链接
// @namespace         ageha.com/ithome
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.3.0.0
// @grant             none
// @include           *://www.ithome.com/*
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/ithome.com.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/ithome.com.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/ithome.com.user.js
// @require           https://github.com/aghea/private-ad-block-filter/raw/master/common/commonRegexDef.user.js
// ==/UserScript==

(function () {
  var lis = document.getElementsByTagName("li");
  start:
  for(var li of lis){
    if(li.innerHTML.indexOf("lapin") > -1){
      li.innerHTML = "";
      li.innerText = "";
      continue start;
    }
  }
  removeAdObj(lis);
})();
