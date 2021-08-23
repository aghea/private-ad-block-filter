// ==UserScript==
// @name              Block bde4 ads
// @homepageURL       https://gitee.com/ageha/ad-block-filter
// @homepage          https://gitee.com/ageha/ad-block-filter
// @website           https://gitee.com/ageha/ad-block-filter
// @description       关闭bde4广告
// @namespace         ageha.com/bde4
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.1.6.2
// @grant             none
// @include           *://bde4.com/*
// @include           *://bde4.cc/*
// @include           *://*.bde4.com/*
// @include           *://*.bde4.cc/*
// @include           *://*.mp4er.com/*
// @include           *://mp4er.com/*
// @updateURL         https://gitee.com/ageha/ad-block-filter/raw/master/bde4.cc.user.js
// @downloadURL       https://gitee.com/ageha/ad-block-filter/raw/master/bde4.cc.user.js
// @installURL        https://gitee.com/ageha/ad-block-filter/raw/master/bde4.cc.user.js
// @require           https://gitee.com/ageha/ad-block-filter/raw/master/common/commonFun.js
// ==/UserScript==
(function () {
  var centers = document.getElementsByTagName("center");
  for(var c of centers){
    c.parentNode.removeChild(c);
  }

  var divs = document.getElementsByTagName("div");
  for (var div of divs){
    var realPosition = getRealStyle(div,"position");
    var realBottom = getRealStyle(div,"bottom");
    if(realPosition=="fixed" && (realBottom=="-10px" || realBottom=="-40px") 
      || div.className == "ui stackable grid"
      || div.className == "download-help"){
      //alert(realPosition);
      div.parentNode.removeChild(div);
    }
    
    var dls = document.getElementsByTagName("dl");
    for (var dl of dls){
        if (dl.className == "dl-inline"){
            dl.parentNode.removeChild(dl);
        }
    }

    var commentList = document.getElementById("comment-list");
    commentList.parentNode.removeChild(commentList);

    var sections = document.getElementsByTagName("section");
    for (var sec of sections){
        if (sec.className == "abstract mobile-hide"){
            sec.parentNode.removeChild(sec.nextSibling.nextSibling);
            sec.parentNode.removeChild(sec);
        }
    }

  }
})();