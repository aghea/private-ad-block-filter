//version       1.3.0.0
function initRegexArray(){
    ///[仅减]\d{1,4}(\.[0-9]{1,2})?元/,
    var re1=/[\u4ec5\u51cf]\d{1,4}(\.[0-9]{1,2})?\u5143/;
    //减1-4元)
    var re2=/\d{1,4}(\.[0-9]{1,2})+\u5143\u0029/;
    //立减,到手,低至,大促,预售,包邮,直降,抄底,秒杀
    var re3=/\u7acb\u51cf|\u5230\u624b|\u4f4e\u81f3|\u5927\u4fc3|\u9884\u552e|\u5305\u90ae|\u76f4\u964d|\u6284\u5e95|\u79d2\u6740/;
    //(xxxx折)
    var re4=/\u0028\d{1,2}(\.[0-9]{1,2})\u6298\u0029/;
    //（xxxx折）
    var re5=/\uff08\d{1,2}(\.[0-9]{1,2})\u6298\uff09/;
    //1-4.99元
    var re6=/\d{1,4}(\.[0-9]{1,2})+\u5143$/;
    //罗永浩,李国庆,周鸿祎
    var re7=/\u7f57\u6c38\u6d69|\u674e\u56fd\u5e86|\u5468\u9e3f\u794e/;

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
    //限时 新低 京东 天猫 淘宝 商超 拼多多
    var chuxiao =/\u9650\u65f6|\u65b0\u4f4e|\u4eac\u4e1c|\u5929\u732b|\u6dd8\u5b9d|\u5546\u8d85|\u62fc\u591a\u591a/;
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
        for(var idx = 0;idx < reDoubleArray.length;idx+=2){
            if(reDoubleArray[idx].test(obj.innerText) && reDoubleArray[idx + 1].test(obj.innerText)){
                obj.innerText = "";
                obj.parentNode.innerText = "";
                continue start;
            }
        }
        for(var re of reArray){
            if(re.test(obj.innerText)){
                obj.innerHTML = "";
                obj.innerText = "";
                continue start;
            }
        }
    }

    
}



    
    