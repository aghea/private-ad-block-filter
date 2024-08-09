// ==UserScript==
// @name         DeleteMiguVideoChatRoom
// @namespace    http://tampermonkey.net/
// @version      1.0.0.0
// @description  删除咪咕直播的聊天室
// @author       You
// @match        https://www.miguvideo.com/p/live/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=miguvideo.com
// @grant        none
// ==/UserScript==
function delChat(){
    var chat = document.getElementById("chat");
    chat.parentElement.removeChild(chat);
}

(function() {
   setTimeout(delChat,5000);
    // Your code here...
})();
