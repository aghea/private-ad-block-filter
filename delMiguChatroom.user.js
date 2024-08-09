// ==UserScript==
// @name         DeleteMiguVideoChatRoom
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @version      1.0.0.0
// @description  删除咪咕直播的聊天室
// @namespace         ageha.com/miguvideo
// @author            ageha
// @license           BSD 3-clause Clear License
// @match        https://www.miguvideo.com/p/live/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=miguvideo.com
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/delMiguChatroom.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/delMiguChatroom.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/delMiguChatroom.user.js
// @grant        none
// ==/UserScript==
function delChat(){
    var chat = document.getElementById("chat");
    chat.parentElement.removeChild(chat);
}

(function() {
   setTimeout(delChat,5000);
})();
