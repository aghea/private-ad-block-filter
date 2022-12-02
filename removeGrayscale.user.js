// ==UserScript==
// @name         去除网页灰
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mydrivers.com
// @grant        none
// ==/UserScript==

(function() {
    document.getElementsByTagName("html")[0].style.filter="";
})();
