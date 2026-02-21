// ==UserScript==
// @name         Del mp4 top div
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @namespace    ageha.com/domp4
// @version      2.0.0.1
// @description  删除mp4的top div
// @author       ageha
// @include        https://*.*.*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mp4us.com
// @license           BSD 3-clause Clear License
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/DelMp4.comTopDiv.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/DelMp4.comTopDiv.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/DelMp4.comTopDiv.user.js
// @require           https://cdn.bootcdn.net/ajax/libs/jquery/1.4.1/jquery.min.js
// @require           https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const theHead = document.title;
    if(theHead.indexOf("MP4电影") > -1 || theHead.indexOf("Mp4电影") > -1){
        /* globals jQuery, $, waitForKeyElements */
        $('#top').remove();
        $('.alert.alert-warning.alert-dismissable').remove();
        $('#HMRichBox').remove();
        $('#HMcoupletDivright').remove();
        $('#HMcoupletDivleft').remove();
        $('.download_help').remove();
    }
})();
