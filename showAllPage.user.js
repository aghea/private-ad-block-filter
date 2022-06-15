// ==UserScript==
// @name         自动打开全文
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @version      0.2
// @description  自动打开全文
// @author       ageha
// @license           BSD 3-clause Clear License
// @match        https://*.zol.com.cn/*
// @match        https://news.mydrivers.com/*
// @grant        none
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/showAllPage.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/showAllPage.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/showAllPage.user.js

// ==/UserScript==
function showAll(){
    var alinks = document.getElementsByTagName("a");

    for (var alink of alinks){
        if(alink.innerHTML.indexOf("全文") > -1){
            var text = alink.href;
            text = text.substring(0,text.indexOf("#"));
            window.location.href=text;
        }
    }
}
(function() {
    showAll();
})();
