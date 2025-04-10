// ==UserScript==
// @name         Del mp4 top div
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @namespace    ageha.com/domp4
// @version      2.0.0.0
// @description  删除mp4的top div
// @author       ageha
// @include        https://www.mp4us.com/html/*
// @include        https://www.padmp4.com/html/*
// @include        https://www.xlmp4.cc/html/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mp4us.com
// @license           BSD 3-clause Clear License
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/DelMp4.comTopDiv.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/DelMp4.comTopDiv.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/DelMp4.comTopDiv.user.js
// @require      https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery-cookie/1.4.1/jquery.cookie.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const theHead = document.title;
    if(theHead.indexOf("Mp4电影") > -1){
        /* globals jQuery, $, waitForKeyElements */
        $('#top').remove();
        $('.alert.alert-warning.alert-dismissable').remove();
        $('#HMRichBox').remove();
        $('#HMcoupletDivright').remove();
        $('#HMcoupletDivleft').remove();
        $('.article-related.download_help').remove();
    }
})();
