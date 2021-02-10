// ==UserScript==
// @name     block yyets
// @version  1
// @grant    none
// @include      *://www.rrys2020.com/*
// @updateURL https://gitee.com/ageha/ad-block-filter/raw/master/yyets.com.user.js
// @downloadURL https://gitee.com/ageha/ad-block-filter/raw/master/yyets.com.user.js
// @installURL https://gitee.com/ageha/ad-block-filter/raw/master/yyets.com.user.js
// ==/UserScript==

(function () {
  var yyetsTr = new Array();
  var idx = 0;
  var items = document.getElementById("items");
  var tbody = items.getElementsByTagName("tbody");
	var trs = tbody[0].getElementsByTagName("tr");
  for (var tr of trs){
    var tds = tr.getElementsByTagName("td");
    for (var td of tds){
      if(td.innerText.indexOf("yyets://") > -1){
        //alert(td.innerText);
        //tbody[0].removeChild(tr);
        yyetsTr[idx++]=tr;
      }
    }
  }
  for(var tr of yyetsTr){
    tbody[0].removeChild(tr);
  }
})();


