// ==UserScript==
// @name         电影港简介删除
// @homepageURL       https://github.com/aghea/private-ad-block-filter/
// @homepage          https://github.com/aghea/private-ad-block-filter/
// @website           https://github.com/aghea/private-ad-block-filter/
// @namespace         ageha.com/dygangs
// @version      1.0
// @description  电影港简介无用内容删除
// @author            ageha
// @license           BSD 3-clause Clear License
// @match        https://www.dygangs.net/ys/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dygangs.net
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/removedygangstable.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/removedygangstable.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/removedygangstable.user.js
// @grant        none
// ==/UserScript==

(function() {
    var table = document.getElementById("free").parentElement.parentElement.parentElement.parentElement;
    table.parentElement.removeChild(table);
})();
