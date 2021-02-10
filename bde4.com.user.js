// ==UserScript==
// @name              Block bde4 ads
// @homepageURL       https://gitee.com/ageha/ad-block-filter
// @homepage          https://gitee.com/ageha/ad-block-filter
// @website           https://gitee.com/ageha/ad-block-filter
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.1.1
// @grant             none
// @include           *://bde4.com/*
// @include           *://bde4.cc/*
// @updateURL         https://gitee.com/ageha/ad-block-filter/raw/master/bde4.com.user.js
// @downloadURL       https://gitee.com/ageha/ad-block-filter/raw/master/bde4.com.user.js
// @installURL        https://gitee.com/ageha/ad-block-filter/raw/master/bde4.com.user.js
// ==/UserScript==

(function () {
  var centers = document.getElementsByTagName("center");
  for(var c of centers){
    c.parentNode.removeChild(c);
  }

  var divs = document.getElementsByTagName("div");
  for (var div of divs){
    var realPosition = getRealStyle(div,"position");
    var realBottom = getRealStyle(div,"bottom");
    if(realPosition=="fixed" && realBottom=="-10px"){
      //alert(realPosition);
      div.parentNode.removeChild(div);
    }
  }
  
  function getRealStyle(element,styleName){
    var realStyle = null;
    if(element.currentStyle){
      	realStyle = element.currentStyle[styleName];//IE
      }else if(window.getComputedStyle){
      	realStyle=window.getComputedStyle(element,null)[styleName];//W3C
      }
    return realStyle;
  }

})();