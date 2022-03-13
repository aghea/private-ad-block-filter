// ==UserScript==
// @name              Common Regex Def
// @homepageURL       https://gitee.com/ageha/ad-block-filter
// @homepage          https://gitee.com/ageha/ad-block-filter
// @website           https://gitee.com/ageha/ad-block-filter
// @description       通用规则符
// @namespace         ageha.com/common
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.2.0.0
// @grant             none
// @include           *://*.*.*//*
// @updateURL         https://gitee.com/ageha/ad-block-filter/raw/master/common/commonRegexDef.user.js
// @downloadURL       https://gitee.com/ageha/ad-block-filter/raw/master/common/commonRegexDef.user.js
// @installURL        https://gitee.com/ageha/ad-block-filter/raw/master/common/commonRegexDef.user.js
// @require           https://gitee.com/ageha/ad-block-filter/raw/master/common/commonFun.js
function initRegexArray(){
    ///\d{1,4}(\.[0-9]{1,2})?元/,
    var re1=/\d{1,4}(\.[0-9]{1,2})?\u5143/;
    //限时新低立减到手低至大促预售包邮直降抄底秒杀狂促
    var re2=/\u9650\u65f6|\u65b0\u4f4e|\u7acb\u51cf|\u5230\u624b|\u4f4e\u81f3|\u5927\u4fc3|\u9884\u552e|\u5305\u90ae|\u76f4\u964d|\u6284\u5e95|\u79d2\u6740|\u72c2\u4fc3/;
    //xx.xx折
    var re3=/\d{1,2}(\.[0-9]{1,2})\u6298/;
    //罗永浩李国庆周鸿祎董明珠吴京余承东
    var re4=/\u7f57\u6c38\u6d69|\u674e\u56fd\u5e86|\u5468\u9e3f\u794e|\u8463\u660e\u73e0|\u5434\u4eac|\u4f59\u627f\u4e1c/;
    //长津湖战狼
    var re5=/\u957f\u6d25\u6e56|\u6218\u72fc/;
    //理想ONE 大众 奔驰 宝马 丰田 五菱 宏光 奥迪 蔚来 本田 思域 奇瑞 长城坦克 雷克萨斯 北京现代 比亚迪 长安UNI 蒙迪欧 气囊
    var re6=/\u7406\u60f3\u004f\u004e\u0045|\u5927\u4f17|\u5954\u9a70|\u5b9d\u9a6c|\u4e30\u7530|\u4e94\u83f1|\u5b8f\u5149|\u5965\u8fea|\u851a\u6765|\u672c\u7530|\u601d\u57df|\u5947\u745e|\u957f\u57ce\u5766\u514b|\u96f7\u514b\u8428\u65af|\u5317\u4eac\u73b0\u4ee3|\u6bd4\u4e9a\u8fea|\u957f\u5b89\u0055\u004e\u0049|\u8499\u8fea\u6b27|\u6c14\u56ca/;
    //荣耀 realme Redmi
    var re7=/\u8363\u8000|\u0072\u0065\u0061\u006c\u006d\u0065|\u0052\u0065\u0064\u006d\u0069/;
    
    var reArray=[re1
                 ,re2
                 ,re3
                 ,re4
                 ,re5
                 ,re6
                 ,re7
                ];
    return reArray;
}
    
function initRegexDoubleArray(){
    //京东 天猫 淘宝 商超 拼多多
    var chuxiao =/\u4eac\u4e1c|\u5929\u732b|\u6dd8\u5b9d|\u5546\u8d85|\u62fc\u591a\u591a/;
    //数字元
    var yuan =/\d{1,4}(\.[0-9]{1,2})?\u5143/;
    //京东|网易|百度|腾讯|芒果|优酷|爱奇艺
    var batName =/\u4eac\u4e1c|\u7f51\u6613|\u767e\u5ea6|\u817e\u8baf|\u8292\u679c|\u4f18\u9177|\u7231\u5947\u827a/;
    //会员
    var batMember =/\u4f1a\u5458/;
    var reDoubleArray=[chuxiao,yuan
                       ,batName,batMember
                        ];
    return reDoubleArray;
}

function removeAdObj(objs){
    var reArray = initRegexArray();
    var reDoubleArray = initRegexDoubleArray();
    start:
    for(var obj of objs){
        for(var re of reArray){
            if(re.test(obj.innerText)){
                obj.innerHTML = "";
                obj.innerText = "";
                continue start;
            }
        }
        for(var idx = 0;idx < reDoubleArray.length;idx+=2){
            if(reDoubleArray[idx].test(obj.innerText) && reDoubleArray[idx + 1].test(obj.innerText)){
                obj.innerText = "";
                obj.parentNode.innerText = "";
                continue start;
            }
        }
    }  
}



    
    