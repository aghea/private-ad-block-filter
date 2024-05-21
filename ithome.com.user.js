// ==UserScript==
// @name              Block ithome ads
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @description       关闭ithome上辣品链接
// @namespace         ageha.com/ithome
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.5.0.0
// @grant             none
// @include           *://www.ithome.com/*
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/ithome.com.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/ithome.com.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/ithome.com.user.js
// @require           https://github.com/aghea/private-ad-block-filter/raw/master/common/commonRegexDef.user.js
// ==/UserScript==
function closeLapin(lis){
  start:
  for(var li of lis){
    if(li.innerHTML.indexOf("lapin") > -1){
      li.innerHTML = "";
      li.innerText = "";
      continue start;
    }
  }
}
function closeImgLazyLoad(){
    //img lazyload
    var paragraph=document.getElementById("paragraph");
    if (typeof(paragraph) == "null" || typeof(paragraph) == "undefined") {
        return;
    }
    var imgs = paragraph.getElementsByTagName("img");
    for(var img of imgs){
        var picsrc=img.getAttribute("data-original");
        img.src=picsrc;
    }
}
function removeSpanText(){
    var paragraph=document.getElementById("paragraph");
    var str = paragraph.innerHTML.toString();
    paragraph.innerHTML = str.replaceAll("<strong>"," ").replaceAll("</strong>"," ").replaceAll("color:"," ").replaceAll("accentTextColor"," ");
}
(function () {
  var lis = document.getElementsByTagName("li");
  closeLapin(lis);
  removeAdObj(lis);
  closeImgLazyLoad();
  removeSpanText();
})();
