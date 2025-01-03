// ==UserScript==
// @name         移除mydrivers页面评论导向
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @version      1.2.6.0
// @description  移除mydrivers页面评论导向
// @author       ageha
// @license           BSD 3-clause Clear License
// @match        https://news.mydrivers.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversComments.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversComments.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversComments.user.js

// ==/UserScript==
var debug = false;
var divs = document.getElementsByClassName("news_info");
var div = divs[0];
//移除页面内strong文字
function replaceStrong(){
            var text = div.innerHTML.toString();
            var t = text.replaceAll("<strong>"," ").replaceAll("<strong ","&lt; ").replaceAll("</strong>"," ")
                        .replaceAll("<b>"," ").replaceAll("</b>"," ")
                        .replaceAll(new RegExp('<\s*font\s*color\s*=\'#ff0000\'>', "g")," ").replaceAll("</font>"," ")
                        //<\s*style=\s*"\s*rgb(\s*255,\s*0,\s*0)\s*;\s*">'
                        .replaceAll("color:"," ").replaceAll(new RegExp('\u003c\s*\u0073\u0074\u0079\u006c\u0065\s*\u003d\s*\u0022\s*\u0072\u0067\u0062\u0028\s*\u0032\u0035\u0035\u002c\s*\u0030\u002c\s*\u0030\u0029\s*\u003b\s*\u0022\u003e', "g")," ");
            div.innerHTML=t;
}
//获得最后一个p标签
function getLastPlink(){
    var plinks = div.getElementsByTagName("p");
    var lastPlink = div.getElementsByClassName("end");
    var obj = null;
    try{
      obj = lastPlink[0].previousSibling.previousSibling;
    }catch(err){
        if(debug)console.log(err);
    }
    return obj;
}
//移除调查
function removeByQuestionMark(){
    var diaocha_body = document.getElementById("diaocha_body");
    try {
        var fj= diaocha_body.previousSibling.previousSibling;
        var ch = fj.innerText.substr(-1);
        if( ch == "?"||ch =="？"){
            div.removeChild(fj);
        }
    } catch (err){
        if(debug)console.log(err);
    }
}
function removePLinkByTag(tag){
    try{
        var obj = getLastPlink();
        var text = obj.innerHTML.toString();
        if(text.indexOf(tag)>-1){
            div.removeChild(obj);
        }
    }catch(err){
        if(debug)console.log(err);
    }
}
function removeOpByDoubleChk(){
    var regArray = [
        //对此|大家|你,怎么看待
        /\u5bf9\u6b64|\u5927\u5bb6|\u4f60/,/\u600e\u4e48|\u770b\u5f85/
        ,
        //你喜欢|吗？
        /\u4f60\u559c\u6b22/,/\u5417\uff1f/
        ,
        //怎么看|评论区
        /\u600e\u4e48|\u770b\u5f85/,/\u8bc4\u8bba\u533a/
    ];
    var plinks = div.getElementsByTagName("p");
    for(var idx = plinks.length - 1; idx > -1 ; idx --){
        for(var jdx = 0; jdx <regArray.length ; jdx+=2){
            if(regArray[jdx].test(plinks[idx].innerText)&&regArray[jdx+1].test(plinks[idx].innerText)){
                div.removeChild(plinks[idx]);
                break;
            }
        }
    }
}
function removeOp1(){
        var regArray = [
        //觉得（中文）？
        /\u89c9\u5f97[\u4e00-\u9fa5]{0,}[\uff1f|\u003f]$/
        //怎么（中文）？
        ,/\u600e\u4e48[\u4e00-\u9fa5]{0,}[\uff1f|\u003f]$/
        //吗？
        ,/\u5417[\uff1f|\u003f]$/
        //样？
        ,/\u6837[\uff1f|\u003f]$/
        //呢？
        ,/\u5462[\uff1f|\u003f]$/
        //留言|点赞|分享
        ,/\u7559\u8a00|\u70b9\u8d5e|\u5206\u4eab/
        //如何？
        ,/\u5982\u4f55[\uff1f|\u003f]$/
        //再等等|看看|想想|观察观察
        ,/\u518d\u7b49\u7b49[\uff1f|\u003f]|\u518d\u770b\u770b[\uff1f|\u003f]|\u518d\u60f3\u60f3[\uff1f|\u003f]|\u518d\u89c2\u5bdf\u89c2\u5bdf[\uff1f|\u003f]$/
    ];
    var plinks = div.getElementsByTagName("p");
    for(var idx = plinks.length - 1; idx > -1 ; idx --){
        for(var jdx = 0; jdx <regArray.length ; jdx++){
            if(regArray[jdx].test(plinks[idx].innerText)){
                div.removeChild(plinks[idx]);
                return true;
            }
        }
    }
}
function removeMinHigh(){
    var main_left = document.getElementsByClassName("main_left");
    main_left[0].style.minHeight="0px";
}
function removeStrong(){
    removePLinkByTag("strong");
}
function removeDivWidth(...params){
    for (var para of params){
        var divs = document.getElementsByClassName(para);
        divs[0].style.width ="auto";
    }
}
(function() {
    removeMinHigh();
    removeDivWidth("main_box","main_left");
    removeOpByDoubleChk();
    removeStrong();
    removeByQuestionMark();
    replaceStrong();
    if(removeOp1()){
        return;
    }
})();
