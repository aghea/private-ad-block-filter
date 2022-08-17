// ==UserScript==
// @name         移除mydrivers最后一张无用图片
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @version      5.0.0.0
// @description  移除mydrivers最后一张无用图片
// @author       ageha
// @license           BSD 3-clause Clear License
// @match        https://news.mydrivers.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversPic.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversPic.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversPic.user.js

// ==/UserScript==
var debug = false;
var divs = document.getElementsByClassName("news_info");
var div = divs[0];
function removeLastImg(){
    var plinks = div.getElementsByTagName("p");
    var lastPlink = div.getElementsByClassName("end");
    var obj = null;
    try{
      obj = lastPlink[0].previousSibling.previousSibling;
    }catch(err){
      for(var idx = plinks.length - 1; idx > -1; idx--){
          var tmp = plinks[idx].innerHTML;
          if(tmp.toString().indexOf("img")>-1){
              obj = plinks[idx];
              break;
          }
      }
      if(debug)console.log(err);
    }
    div.removeChild(obj);
}

(function() {
    removeLastImg();
})();


