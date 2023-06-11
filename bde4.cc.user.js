// ==UserScript==
// @name              Block bde4 ads
// @homepageURL       https://github.com/aghea/private-ad-block-filter/
// @homepage          https://github.com/aghea/private-ad-block-filter/
// @website           https://github.com/aghea/private-ad-block-filter/
// @description       关闭bde4广告
// @namespace         ageha.com/bde4
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.3.3.1
// @grant             none
// @include           *://*.bde4.*/*
// @include           *://*.mp4er.*/*
// @include           *://*.52bdys.*/*
// @include           *://*.btbdys.*/*
// @include           *://*.bdys*.*/*
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/bde4.cc.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/bde4.cc.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/bde4.cc.user.js
// @require           https://github.com/aghea/private-ad-block-filter/raw/master/common/commonFun.js
// ==/UserScript==
function removeAdBlock(){
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
  }
}
function removeTips(){
    var dls = document.getElementsByTagName("dl");
    for (var dl of dls){
        if (dl.className == "dl-inline"){
            dl.parentNode.removeChild(dl);
        }
    }
}
function removeComment(){
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
function loadimg(){
    var imgs = document.getElementsByTagName("img");
    for(var img of imgs){
        var picsrc=img.getAttribute("data-src");
        if(picsrc != null){
            img.src=picsrc;
            img.style="display: block !important;";
            img.class="transition visible";
            img.ref="no-referrer";
            img.removeAttribute("referrerpolicy");
        }
    }
}
(function () {
    removeAdBlock();
    removeTips();
    removeComment();
    loadimg();

})();
