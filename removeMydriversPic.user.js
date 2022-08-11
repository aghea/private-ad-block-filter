// ==UserScript==
// @name         移除mydrivers最后一张无用图片和评论导向
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @version      4.3.1.3
// @description  移除mydrivers最后一张无用图片和评论导向
// @author       ageha
// @license           BSD 3-clause Clear License
// @match        https://news.mydrivers.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversPic.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversPic.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversPic.user.js

// ==/UserScript==
var divs = document.getElementsByClassName("news_info");
var div = divs[0];
function getLastPlink(){
    var plinks = div.getElementsByTagName("p");
    var lastPlink = div.getElementsByClassName("end");
    var obj = lastPlink[0].previousSibling.previousSibling;
    return obj;
}
function removeByQuestionMark(){
    var diaocha_body = document.getElementById("diaocha_body");
    var fj= diaocha_body.previousSibling.previousSibling;
    //alert(fj.innerText);
    var ch = fj.innerText.substr(-1);
    if( ch == "?"||ch =="？"){
        div.removeChild(fj);
    }
}
function removePLinkByTag(tag){
    var obj = getLastPlink();
    var text = obj.innerHTML.toString();
    if(text.indexOf(tag)>-1){
        div.removeChild(obj);
    }
}
function removeLastImg(){
    removePLinkByTag("img");
}
function removeStrong(){
    removePLinkByTag("strong");
}
function removeOpByDoubleChk(){
    var regArray = [
        //对此|大家|你,怎么看
        /\u5bf9\u6b64|\u5927\u5bb6|\u4f60/,/\u600e\u4e48\u770b/
        ,
        //你喜欢|吗？
        /\u4f60\u559c\u6b22/,/\u5417\uff1f/
        ,
        //怎么看|评论区
        /\u600e\u4e48\u770b/,/\u8bc4\u8bba\u533a/
    ];
    var plinks = div.getElementsByTagName("p");
    for(var idx = plinks.length - 1; idx > -1 ; idx --){
        for(var jdx = 0; jdx <regArray.length ; jdx+=2){
            if(regArray[jdx].test(plinks[idx].innerHTML)&&regArray[jdx+1].test(plinks[idx].innerHTML)){
                div.removeChild(plinks[idx]);
                break;
            }
        }
    }
}
function removeOp1(){
        var regArray = [
        //吗？
        /\u5417[\uff1f|\u003f]$/
        //样？
        ,/\u6837[\uff1f|\u003f]$/
        //呢？
        ,/\u5462[\uff1f|\u003f]$/
        //怎么看|样？
        ,/\u600e\u4e48[\u770b|\u6837][\uff1f|\u003f]/
        //留言讨论。
        ,/\u7559\u8a00\u8ba8\u8bba\u3002$/
        //觉得呢？
        ,/\u89c9\u5f97\u5462[\uff1f|\u003f]$/
    ];
    var plinks = div.getElementsByTagName("p");
    //for(var idx = plinks.length - 1; idx > -1 ; idx --){
    for(var idx = plinks.length - 1; idx > -1 ; idx --){
        for(var jdx = 0; jdx <regArray.length ; jdx++){
            if(regArray[jdx].test(plinks[idx].innerHTML)){
                div.removeChild(plinks[idx]);
                return true;
            }
        }
    }
}
(function() {
    removeLastImg();
    if(removeOp1()){
        return;
    }
    removeOpByDoubleChk();
    removeStrong();
    removeByQuestionMark();
})();


