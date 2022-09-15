// ==UserScript==
// @name              mydrivers关键字过滤广告条目
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @description       mydrivers关键字过滤广告条目
// @namespace         ageha.com/mydrivers
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.11.0.0
// @grant             none
// @include           *://www.mydrivers.com/*
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversAD.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversAD.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/removeMydriversAD.user.js
// @require           https://github.com/aghea/private-ad-block-filter/raw/master/common/commonRegexDef.user.js
// ==/UserScript==

function removeAd(){
  var spans = document.getElementsByClassName("titl");
  removeAdObj(spans);
}

(function () {
  removeAd();
})();
