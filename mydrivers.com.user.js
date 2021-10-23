// ==UserScript==
// @name              关闭mydrivers各种广告
// @homepageURL       https://gitee.com/ageha/ad-block-filter
// @homepage          https://gitee.com/ageha/ad-block-filter
// @website           https://gitee.com/ageha/ad-block-filter
// @description       关闭mydrivers上硬广告
// @namespace         ageha.com/mydrivers
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.4.0.2
// @grant             none
// @include           *://*.mydrivers.com/*
// @updateURL         https://gitee.com/ageha/ad-block-filter/raw/master/mydrivers.com.user.js
// @downloadURL       https://gitee.com/ageha/ad-block-filter/raw/master/mydrivers.com.user.js
// @installURL        https://gitee.com/ageha/ad-block-filter/raw/master/mydrivers.com.user.js
// ==/UserScript==
function removeLuoyonghao(){
    //到手 低至 限时 新低 京东 天猫 淘宝 商超
    var chuxiao = /\u5230\u624b|\u4f4e\u81f3|\u9650\u65f6|\u65b0\u4f4e|\u4eac\u4e1c\u5929\u732b|\u6dd8\u5b9d|\u5546\u8d85/;
    //数字元
    var yuan = /\d{1,4}(\.[0-9]{1,2})?\u5143/;
    //京东|网易|百度|腾讯|芒果|优酷|爱奇艺
    var batName = /\u4eac\u4e1c|\u7f51\u6613|\u767e\u5ea6|\u817e\u8baf|\u8292\u679c|\u4f18\u9177|\u7231\u5947\u827a/;
    //会员
    var batMember = /\u4f1a\u5458/;
    var reDoubleArray=[chuxiao,yuan
                       ,batName,batMember
                        ];
    ///[仅减]\d{1,4}(\.[0-9]{1,2})?元/,
    var re1=/[\u4ec5\u51cf]\d{1,4}(\.[0-9]{1,2})?\u5143/;
    //减1-4元)
    var re2=/\d{1,4}(\.[0-9]{1,2})+\u5143\u0029/;
    //"罗永浩","李国庆","立减","到手","低至","大促","预售","包邮","直降"
    var re3=/\u7f57\u6c38\u6d69|\u674e\u56fd\u5e86|\u7acb\u51cf|\u5230\u624b|\u4f4e\u81f3|\u5927\u4fc3|\u9884\u552e|\u5305\u90ae|\u76f4\u964d/
    var reArray=[re1
                 ,re2
                 ,re3
                ];
    var spans = document.getElementsByClassName("titl");
    start:
    for(var span of spans){
        for(var idx = 0;idx < reDoubleArray.length;idx+=2){
            if(reDoubleArray[idx].test(span.innerText) && reDoubleArray[idx + 1].test(span.innerText)){
                console.log(span.innerText);
                span.innerText = "";
                span.parentNode.innerText = "";
                continue start;
            }
        }
        for(var re of reArray){
          if (re.test(span.innerText)) {
              console.log(span.innerText);
              span.innerText = "";
              if(span.parentNode != null){
                  span.parentNode.innerText = "";
              }
              continue start;
          }
        }
    }
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
  removeLuoyonghao();
}
function newsInfoPage(){
  modifyDivWidth();
  hidetj_bottom();
  removeCommentsiframe();
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


