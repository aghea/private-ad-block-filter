// ==UserScript==
// @name         移除mydrivers最后一张无用图片和评论导向
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @version      4.3.0.0
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
function getPLinkByTag(tag){
    var obj = getLastPlink();
    var text = obj.innerHTML.toString();
    if(text.indexOf(tag)>-1){
        div.removeChild(obj);
    }
}
function removeImg(){
    getPLinkByTag("img");
}
function removeStrong(){
    getPLinkByTag("strong");
}
function removeOp(){
    var regArray = [
        //对此|怎么看
        /\u5bf9\u6b64/,/\u600e\u4e48\u770b/
        ,
        //你喜欢|吗？
        /\u4f60\u559c\u6b22/,/\u5417\uff1f/
        ,
        //怎么看|评论区
        /\u600e\u4e48\u770b/,/\u8bc4\u8bba\u533a/
        ,
        //大家|怎么看
        /\u5927\u5bb6/,/\u600e\u4e48\u770b/
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
        /\u5417\uff1f$/
        ,/\u5417\u003f$/
        //怎么看|样？
        ,/\u600e\u4e48[\u770b|\u6837][\uff1f|\u003f]/
        /*
        //怎么看？
        ,/\u600e\u4e48\u770b\uff1f$/
        ,/\u600e\u4e48\u770b\u003f$/
        //怎么样？
        ,/\u600e\u4e48\u6837\uff1f$/
        ,/\u600e\u4e48\u6837\u003f$/   
        */
    ];
    var plinks = div.getElementsByTagName("p");
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
    removeImg();
    if(removeOp1()){
        return;
    }
    removeOp();
    removeStrong();
    removeByQuestionMark();
})();


