// ==UserScript==
// @name              Block bde4 ads
// @homepageURL       https://github.com/aghea/private-ad-block-filter/
// @homepage          https://github.com/aghea/private-ad-block-filter/
// @website           https://github.com/aghea/private-ad-block-filter/
// @description       关闭bde4广告
// @namespace         ageha.com/bde4
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           2.2.0.0
// @grant             none
// @match             *://*.bde4.*/*
// @match             *://*.mp4er.*/*
// @match             *://*.*bdys*.*/*
// @match             *://*.yjys*.*/*
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/bde4.cc.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/bde4.cc.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/bde4.cc.user.js
// @require           https://github.com/aghea/private-ad-block-filter/raw/master/common/commonFun.js
// @require           https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery-cookie/1.4.1/jquery.cookie.min.js
// ==/UserScript==
function removePopNotice(){
    /* globals jQuery, $, waitForKeyElements */
	localStorage.setItem('disableAd', '1');
    $('#yalayi').remove();

    var t = new Date();
	t.setDate(t.getDate() + 10);
    t.setHours(0);
    t.setMinutes(0);
    t.setSeconds(0);
	$.cookie('read', true, {expires: t, path: '/'});
	$('#notice').modal('hide');
    $('#notice').remove();

    $("modal-backdrop.fade").remove();
    $("modal.modal-blur.fade").remove();
    var notice = document.getElementById("notice");
    if(notice == null) return;
    var previousSibling = notice.previousSibling;
    var parentNode = notice.parentNode;
    console.log(parentNode.innerHTML);
    parentNode.removeChild(notice);
    notice.remove();
    parentNode.removeChild(previousSibling);
    previousSibling.remove();
}
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
    removePopNotice();
    removeAdBlock();
    removeTips();
    removeComment();
    loadimg();
})();
