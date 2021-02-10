// ==UserScript==
// @name     Block bde4 ads
// @version  2
// @grant    none
// @include      *://bde4.com/*
// @include      *://bde4.cc/*
// @updateURL https://gitee.com/ageha/ad-block-filter/raw/master/bde4.com.user.js
// @downloadURL https://gitee.com/ageha/ad-block-filter/raw/master/bde4.com.user.js
// @installURL https://gitee.com/ageha/ad-block-filter/raw/master/bde4.com.user.js
// ==/UserScript==

(function () {
  var centers = document.getElementsByTagName("center");
  for(var c of centers){
    c.parentNode.removeChild(c);
  }

})();