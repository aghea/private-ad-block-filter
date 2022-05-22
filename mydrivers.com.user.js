// ==UserScript==
// @name              关闭mydrivers各种广告
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @description       关闭mydrivers上硬广告
// @namespace         ageha.com/mydrivers
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.9.0.0
// @grant             none
// @include           *://*.mydrivers.com/*
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/mydrivers.com.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/mydrivers.com.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/mydrivers.com.user.js
// @require           https://github.com/aghea/private-ad-block-filter/raw/master/common/commonRegexDef.user.js
// ==/UserScript==
function removeAd(){
  var spans = document.getElementsByClassName("titl");
  removeAdObj(spans);
}

function modifyDivWidth(){
    //todo
    var Divs = document.getElementsByClassName("main_box");
    var mainLeft = document.getElementsByClassName("main_left");
    var mainRight = document.getElementsByClassName("main_right");
    mainRight[0].parentNode.removeChild(mainRight[0]);
    mainLeft[0].style.width="1200px;";
}
//关闭页面闲置时间弹框
function hidetj_bottom(){
    var div = document.getElementsByClassName("tj_bottom");
    div[0].innerHTML="";
    div[0].innerText="";
    var a_showhotnews_list_dia = document.getElementById("a_showhotnews_list_dia");
    a_showhotnews_list_dia.innerHTML="";
    a_showhotnews_list_dia.innerText="";
    a_showhotnews_list_dia.parentNode.removeChild(a_showhotnews_list_dia);
}
function removeCommentsiframe(){
  var iframe = document.getElementById("commentsiframe");
  iframe.parentNode.removeChild(iframe);
}
function removeYjgg(){
    var spans = document.getElementsByTagName("span");
    for(var span of spans){
        if(span.innerText.indexOf("硬件狗狗") > -1){
            var b = span.parentNode;
            b.parentNode.removeChild(b.nextSibling.nextSibling);
            b.parentNode.removeChild(b);
        }
    }
}
function removeGoods(){
  var block = "商品信息>>";
  var flag = true;
  var divs = document.getElementsByClassName("news_info");
  
  for (var div of divs){
    var p_elemts = div.getElementsByTagName("p");
    for (var p_elemt of p_elemts){
      var b_elemts = p_elemt.getElementsByTagName("b");
      if (b_elemts && b_elemts.length > 0){
        for (var b_elemt of b_elemts){
          if (b_elemt.innerText.indexOf(block) > -1){
          	p_elemt.parentNode.removeChild(p_elemt);
            
            flag = false;
        		break;
          }
        }
      }
    }
    var div_elemts = div.getElementsByTagName("div");
    for (var div_elemt of div_elemts){
      var b_elemts = div_elemt.getElementsByTagName("b");
      if (b_elemts && b_elemts.length > 0){
        for (var b_elemt of b_elemts){
          if (b_elemt.innerText.indexOf(block) > -1){
          	div_elemt.parentNode.removeChild(div_elemt);
            flag = false;
        		break;
          }
        }
      }
    }
  }
}
function homePage(){
  removeAd();
}
function newsInfoPage(){
  modifyDivWidth();
  hidetj_bottom();
  removeCommentsiframe();
  removeYjgg();
}
function commonFun(){

}
(function () {
  var url = window.location.href;
  if(url.indexOf("www.mydrivers") > -1){
    homePage();
  }else if(url.indexOf("news.mydrivers") > -1){
    newsInfoPage();
  }else{
    commonFun();
  }
})();


