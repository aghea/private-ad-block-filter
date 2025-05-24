// ==UserScript==
// @name         bdys自动打开剧情介绍 删除广告
// @homepageURL       https://github.com/aghea/private-ad-block-filter/
// @homepage          https://github.com/aghea/private-ad-block-filter/
// @website           https://github.com/aghea/private-ad-block-filter/
// @version      3.0.0.0
// @description  bdys自动打开剧情介绍 删除广告
// @namespace         ageha.com/bde4
// @author            ageha
// @license           BSD 3-clause Clear License
// @include           *://*.*.*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bdys01.com
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/OpenBdysSynopsis.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/OpenBdysSynopsis.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/OpenBdysSynopsis.user.js
// @require           https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery-cookie/1.4.1/jquery.cookie.min.js
// @grant        none
// ==/UserScript==

(function() {
    var synopsis = document.getElementById("synopsis");
    try{
        var className = synopsis.className;
        if(className.indexOf("show") == -1){
            synopsis.className = className.toString() + " show";
        }
    }catch(err){}
    /* globals jQuery, $, waitForKeyElements */
    var indexesToRemove = [];
    $("[rel='nofollow']").each(function(index, element) {
        indexesToRemove.push(index);
        element.remove();
    });

    //.each(indexesToRemove, function(i, index){("ul li").eq(index).remove();
    //});

})();
