// ==UserScript==
// @name         bdys自动打开剧情介绍
// @homepageURL       https://github.com/aghea/private-ad-block-filter/
// @homepage          https://github.com/aghea/private-ad-block-filter/
// @website           https://github.com/aghea/private-ad-block-filter/
// @version      0.3
// @description  bdys自动打开剧情介绍
// @namespace         ageha.com/bde4
// @author            ageha
// @license           BSD 3-clause Clear License
// @match        *://*.bdys*.*/*
// @match        *://*.yjys*.*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bdys01.com
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/OpenBdysSynopsis.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/OpenBdysSynopsis.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/OpenBdysSynopsis.user.js
// @grant        none
// ==/UserScript==

(function() {
    var synopsis = document.getElementById("synopsis");
    var className = synopsis.className;
    if(className.indexOf("show") == -1){
        synopsis.className = className.toString() + " show";
    }
})();
