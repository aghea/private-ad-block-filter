// ==UserScript==
// @name         移除mydrivers最后一张无用图片和评论导向
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @version      4.4.1.2
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
    var obj = null;
    try{
      obj = lastPlink[0].previousSibling.previousSibling;
    }catch(err){
        //console.log(err);
    }
    return obj;
}
function removeByQuestionMark(){
    var diaocha_body = document.getElementById("diaocha_body");
    try {
        var fj= diaocha_body.previousSibling.previousSibling;
        var ch = fj.innerText.substr(-1);
        if( ch == "?"||ch =="？"){
            div.removeChild(fj);
        }
    } catch (err){}
}
function removePLinkByTag(tag){
    try{
        var obj = getLastPlink();
        var text = obj.innerHTML.toString();
        if(text.indexOf(tag)>-1){
            div.removeChild(obj);
        }
    }catch(err){}
}
function removeLastImg(){
    //removePLinkByTag("img");
    var plinks = div.getElementsByTagName("p");
    var lastPlink = div.getElementsByClassName("end");
    var obj = null;
    try{
      obj = lastPlink[0].previousSibling.previousSibling;
    }catch(err){
      for(var idx = plinks.length - 1; idx > -1; idx--){
          var tmp = plinks[idx].innerHTML;
          if(tmp.toString().indexOf("img")>-1){
              obj = plinks[idx];
              break;
          }
      }
      //obj = plinks[plinks.length - 1];
      console.log(err);
    }
    div.removeChild(obj);
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
        //再等等|看看
        ,/\u518d\u7b49\u7b49[\uff1f|\u003f]$/
        ,/\u518d\u770b\u770b[\uff1f|\u003f]$/
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
(function() {
    removeLastImg();
    if(removeOp1()){
        return;
    }
    removeOpByDoubleChk();
    removeStrong();
    removeByQuestionMark();
})();


