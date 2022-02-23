// ==UserScript==
// @name         移除mydrivers最后一张无用图片
// @homepageURL       https://gitee.com/ageha/ad-block-filter
// @homepage          https://gitee.com/ageha/ad-block-filter
// @website           https://gitee.com/ageha/ad-block-filter
// @version      0.1
// @description  移除mydrivers最后一张无用图片
// @author       ageha
// @license           BSD 3-clause Clear License
// @match        https://news.mydrivers.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL         https://gitee.com/ageha/ad-block-filter/raw/master/removeMydriversPic.user.js
// @downloadURL       https://gitee.com/ageha/ad-block-filter/raw/master/removeMydriversPic.user.js
// @installURL        https://gitee.com/ageha/ad-block-filter/raw/master/removeMydriversPic.user.js

// ==/UserScript==
function removeImg(){
    var divs = document.getElementsByClassName("news_info");
    var div = divs[0];
    var plinks = div.getElementsByTagName("p");
    var lastPlink = div.getElementsByClassName("end");
    //alert(lastPlink[0].previousSibling.previousSibling.innerHTML);
    var obj = lastPlink[0].previousSibling.previousSibling;
    if(obj.innerHTML.indexOf("img")>-1){
        div.removeChild(obj);
    }
}
(function() {
    removeImg();
})();