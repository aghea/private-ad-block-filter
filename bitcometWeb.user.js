// ==UserScript==
// @name         BitComet web 自动跳转
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @namespace    ageha.com/bitcometWeb
// @version      1.0
// @description  BitComet web 自动跳转
// @author       You
// @match        http://192.168.5.101:7072/panel/task_add_httpftp*
// @match        http://agiha.vicp.net:7072/panel/task_add_httpftp*
// @icon         https://www.google.com/s2/favicons?domain=5.101
// @license           BSD 3-clause Clear License
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/bitcometWeb.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/bitcometWeb.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/bitcometWeb.user.js
// @grant        none
// ==/UserScript==

(function() {
    function waitClick(){
        var alinks = document.getElementsByTagName("a");
        alinks[2].click();
    }
    var href = window.location.href;
    if(href.indexOf("task_add_httpftp_result") > -1){
        setInterval(waitClick,2000)
    } else {
        var inputs = document.getElementsByTagName("input");
        inputs[0].focus();
    }


})();
