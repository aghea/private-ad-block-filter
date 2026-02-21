// ==UserScript==
// @name              关闭mydrivers各种广告
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @description       关闭mydrivers上硬广告
// @namespace         ageha.com/mydrivers
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           4.0.0.0
// @grant             none
// @include           *://*.mydrivers.com/*
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/mydrivers.com.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/mydrivers.com.user.js
// @require           https://github.com/aghea/private-ad-block-filter/raw/master/common/commonRegexDef.user.js
// @require           https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// ==/UserScript==

// 根据标题关键字过滤广告
function removeAd(){
    //common/commonRegexDef.user.js
  var spans = document.getElementsByClassName("titl");
  removeAdObj(spans);
}
// 删除讣告
function removeBadNews(){
  var spans = document.getElementsByClassName("titl");
  for(var idx = 0; idx < spans.length; idx++){
      var span = spans[idx];
      if(span.innerHTML.toString().indexOf("bad_news") > -1){
          span.parentNode.classList.remove("bad_news");
          var childnodes = span.childNodes;
          for(var childnode of childnodes){
              childnode.classList.remove("bad_news");
          }
      }
  }
}
//删除red样式
function removeRedSpan(){
  var spans = document.getElementsByClassName("redb");
  for(var idx = 0; idx < spans.length; idx++){
      var span = spans[idx];
      span.classList.remove("redb");
  }
}
//关闭弹窗div
function closePopDivAd(){
    var divs = document.getElementsByTagName("div");
    var array = new Array();
    for(var idx = 0; idx < divs.length; idx++){
        try {
            var name = divs[idx].className;
            if(name == "top"){
                break;
            } else {
                array.push(divs[idx]);
            }
        }
        catch(err) {
        }
    }
    try{
        var parent = array[array.length - 1].parentNode;
        for (idx = array.length - 1 ; idx > -1; idx--){
            parent.removeChild(array[idx]);
        }
    }catch(err) {
    }
}
//关闭页面闲置时间弹框
function hidetj_bottom(){
    /* globals jQuery, $, waitForKeyElements */
    $('.tj_bottom').remove();
    $('#a_showhotnews_list_dia').remove();
}
function removeCommentsiframe(){
    $('#commentsiframe').remove();
}
function removeUnwanted(){
    $('.top').remove();
    $('.wuquanxian').remove();
    $('.pathway').remove();
    $('.baidu').remove();
    $('.footer_about').remove();

    $('#menu_2023').remove();
    $('#footer').remove();
    $('#append_parent').remove();
    $('#div_login').remove();
    $('#win_float').remove();
    $('#vleft_tab').remove();
    $('#vright_tab').remove();
    $('#improve_info').remove();
    
    $('.vedio_float').remove();
    $('.vedio_pinlun_float').remove();
    $('.afimg_container').remove();
    $('.i1vbApifa5').remove();
    $('.jdong1div_double').remove();
}
function removeADSpan(){
    // 00：00  ？日
    var re1 = /\d*:\d*|\d*\u65e5/;
    //广告 推广 好物
    var re = /\u5e7f\s*\u544a|\u63a8\s*\u5e7f|\u597d\s*\u7269/;
    var spans = document.getElementsByTagName("span");
    for(var span of spans){
        if(re.test(span.innerText)){
            var li = span.parentNode;
            li.removeChild(span.previousSibling);
            li.removeChild(span);
        }
    }
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
function removeDoubleEleven(){
    //[双11|京东|天猫]红包
    var reg = /[\u53cc\u0031\u0031|\u4eac\u4e1c|\u5929\u732b]\u7ea2\u5305/;
    var divs = document.getElementsByClassName("news_info");
    for (var div of divs){
        var p_elemts = div.getElementsByTagName("p");
        for (var idx = p_elemts.length - 1; idx > 0 ; idx--){
            if(reg.test(p_elemts[idx].innerText)){
               p_elemts[idx].parentNode.removeChild(p_elemts[idx]);
            }
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
function removeH4(){
  var mainLeft = document.getElementsByClassName("main_left");
  var h4 = mainLeft[0].getElementsByTagName("h4");
  for (var h of h4){
    mainLeft[0].removeChild(h);
  }
}
function resizeNewsInfoP(){
    $(".news_info p").css('padding','4px');
    $(".news_info p").css('line-height','25px');
    $(".news_info").css('font-size','13px');
}

function homePage(){
  closePopDivAd();
  removeAd();
  removeADSpan();
  removeBadNews();
}
function newsInfoPage(){
  hidetj_bottom();
  removeCommentsiframe();
  removeYjgg();
  removeH4();
  removeDoubleEleven();
  removeUnwanted();
  resizeNewsInfoP();
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



