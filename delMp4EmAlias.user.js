// ==UserScript==
// @name         删除 <em>别名
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @namespace    ageha.com/domp4
// @version      1.0.0.0
// @author       ageha
// @include        https://*.*.*/*.*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xlmp4.com
// @license           BSD 3-clause Clear License
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/delMp4EmAlias.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/delMp4EmAlias.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/delMp4EmAlias.user.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
     const theHead = document.title;
    if(theHead.indexOf("Mp4电影") > -1){
        var ems = document.getElementsByTagName("em");
        try{
            for(var idx = 0; idx < ems.length; idx++){
                if(ems[idx].innerText == "别名："){
                    ems[idx].innerText = " ";
                    break;
                }
            }
        }catch(err){}
    }
})();
