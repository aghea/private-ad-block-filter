// ==UserScript==
// @name              Common Regex Def
// @homepageURL       https://github.com/aghea/private-ad-block-filter
// @homepage          https://github.com/aghea/private-ad-block-filter
// @website           https://github.com/aghea/private-ad-block-filter
// @description       通用规则符
// @namespace         ageha.com/common
// @author            ageha
// @license           BSD 3-clause Clear License
// @version           1.5.0.42
// @grant             none
// @include           *://*.*.*//*
// @updateURL         https://github.com/aghea/private-ad-block-filter/raw/master/common/commonRegexDef.user.js
// @downloadURL       https://github.com/aghea/private-ad-block-filter/raw/master/common/commonRegexDef.user.js
// @installURL        https://github.com/aghea/private-ad-block-filter/raw/master/common/commonRegexDef.user.js
// @require           https://github.com/aghea/private-ad-block-filter/raw/master/common/commonFun.js
function initRegexArray(){
    ///\d{1,4}(\.[0-9]{1,2})万?元起?/,
    var re1=/\d{1,4}(\.[0-9]{1,2})?\u0020?\u4e07?\u5143\u8d77?/;
    //限时 新低 立减 到手 低至 大促 预售 包邮 直降 抄底 秒杀 狂促 商超 券后
    var re2=/\u9650\u65f6|\u65b0\u4f4e|\u7acb\u51cf|\u5230\u624b|\u4f4e\u81f3|\u5927\u4fc3|\u9884\u552e|\u5305\u90ae|\u76f4\u964d|\u6284\u5e95|\u79d2\u6740|\u72c2\u4fc3|\u5546\u8d85|\u5238\u540e/;
    //xx.xx折
    var re3=/\d{1,2}(\.[0-9]{1,2})\u6298/;
    //罗永浩李国庆周鸿祎董明珠吴京余承东徐直军李想李瑞峰王自如 董宇辉 姚安娜 郑爽邓承浩 张勇 刘畊宏 魏建军 尹同跃  唐尚珺
    var re4=/\u7f57\u6c38\u6d69|\u674e\u56fd\u5e86|\u5468\u9e3f\u794e|\u8463\u660e\u73e0|\u5434\u4eac|\u4f59\u627f\u4e1c|\u5f90\u76f4\u519b|\u674e\u60f3|\u674e\u745e\u5cf0|\u738b\u81ea\u5982|\u8463\u5b87\u8f89|\u59da\u5b89\u5a1c|\u90d1\u723d|\u9093\u627f\u6d69|\u5f20\u52c7|\u5218\u754a\u5b8f|\u9b4f\u5efa\u519b|\u5c39\u540c\u8dc3|\u5510\u5c1a\u73fa/;
    //长津湖战狼
    var re5=/\u957f\u6d25\u6e56|\u6218\u72fc/;
    //理想 大众 奔驰 宝马 丰田 五菱 宏光 奥迪 蔚来 本田 思域 奇瑞 长城[坦克|欧拉|山海炮] 雷克萨斯 北京现代 比亚迪 长安UNI汽车智电逸达 蒙迪欧 气囊 哈弗 坦克\d(1,3) 领克0 零跑 小鹏 帝豪 北京越野 极氪 魏牌 阿维塔 岚图汽车 别克 腾势 智己 雪佛兰 吉利星越 懂车帝 广汽 埃安 赛力斯 小米汽车 SU7 高合  深蓝L 深蓝汽车  长城汽车 岚图 哪吒L 哪吒汽车 乾崑 创维汽车 江铃福特 华为智驾 仰望U8 乐道 [享问智尊]界 极狐
    var re6=/\u7406\u60f3|\u5927\u4f17|\u5954\u9a70|\u5b9d\u9a6c|\u4e30\u7530|\u4e94\u83f1|\u5b8f\u5149|\u5965\u8fea|\u851a\u6765|\u672c\u7530|\u601d\u57df|\u5947\u745e|\u957f\u57ce[\u5766\u514b|\u6b27\u62c9|\u5c71\u6d77\u70ae]|\u96f7\u514b\u8428\u65af|\u5317\u4eac\u73b0\u4ee3|\u6bd4\u4e9a\u8fea|\u957f\u5b89[\u0055\u004e\u0049|\u6c7d\u8f66|\u667a\u7535|\u9038\u8fbe]|\u8499\u8fea\u6b27|\u6c14\u56ca|\u54c8\u5f17|\u5766\u514b\d{1,3}|\u9886\u514b\d|\u96f6\u8dd1|\u5c0f\u9e4f|\u5e1d\u8c6a|\u5317\u4eac\u8d8a\u91ce|\u6781\u6c2a|\u9b4f\u724c|\u963f\u7ef4\u5854|\u5c9a\u56fe\u6c7d\u8f66|\u522b\u514b|\u817e\u52bf|\u667a\u5df1|\u96ea\u4f5b\u5170|\u5409\u5229\u661f\u8d8a|\u61c2\u8f66\u5e1d|\u5e7f\u6c7d|\u57c3\u5b89|\u8d5b\u529b\u65af|\u5c0f\u7c73\u6c7d\u8f66|\u0053\u0055\u0037|\u9ad8\u5408|\u6df1\u84dd[A-Za-z]|\u6df1\u84dd\u6c7d\u8f66|\u957f\u57ce\u6c7d\u8f66|\u5c9a\u56fe|\u54ea\u5412\u0020?[A-Za-z]|\u54ea\u5412\u6c7d\u8f66|\u4e7e\u5d11|\u521b\u7ef4\u6c7d\u8f66|\u6c5f\u94c3\u798f\u7279|\u534e\u4e3a\u667a\u9a7e|\u4ef0\u671b[A-Za-z]\d|\u4e50\u9053|[\u667a|\u4eab|\u95ee|\u5c0a]\u754c|\u6781\u72d0|COS/;
    //荣耀 realme Redmi
    var re7=/\u8363\u8000|\u0072\u0065\u0061\u006c\u006d\u0065|\u0052\u0065\u0064\u006d\u0069/;
    //百公里耗油 SUV 百公里油耗 零百加速 混动
    var re8=/\u767e\u516c\u91cc\u8017\u6cb9|\u0053\u0055\u0056|\u767e\u516c\u91cc\u6cb9\u8017|\u96f6\u767e\u52a0\u901f|\u6df7\u52a8/;
    ///\d{1,4}(\.[0-9]{1,2})?万起/,
    var re9=/\d{1,4}(\.[0-9]{1,2})?\u0020?\u4e07\u8d77/;
    // [双11|双十一|京东|天猫|11.11|双十二|双12]红包
    var re10=/[\u53cc\u0031\u0031|\u53cc\u5341\u4e00|\u4eac\u4e1c|\u5929\u732b|\u0031\u0031\u002e\u0031\u0031|\u53cc\u5341\u4e8c|\u53cc\u0032\u0032]\u7ea2\u5305/;
    // 满\d{1,4}(\.[0-9]{1,2})减
    var re11=/\u6ee1\d{1,4}(\.[0-9]{1,2})?\u51cf\d{1,4}(\.[0-9]{1,2})?/;
    //月交付1729辆
    var re12=/\u6708\u4ea4\u4ed8\d{1,4}[\u4e07|\u8f86]/;
    //券后xx.xx
    var re13=/\u5238\u540e[\u4e00-\u9fa5]\d{1,4}(\.[0-9]{1,2})?/;
    var reArray=[re1
                 ,re2
                 ,re3
                 ,re4
                 ,re5
                 ,re6
                 ,re7
                 ,re8
                 ,re9
                 ,re10
                 ,re11
                 ,re12
                 ,re13
                ];
    return reArray;
}
    
function initRegexDoubleArray(){
    //京东 天猫 淘宝 商超 拼多多
    var chuxiao =/\u4eac\u4e1c|\u5929\u732b|\u6dd8\u5b9d|\u5546\u8d85|\u62fc\u591a\u591a/;
    //数字元|红包
    var yuan =/\d{1,4}(\.[0-9]{1,2})?\u5143|\u7ea2\u5305/;
    //京东|网易|百度|腾讯|芒果|优酷|爱奇艺
    var batName =/\u4eac\u4e1c|\u7f51\u6613|\u767e\u5ea6|\u817e\u8baf|\u8292\u679c|\u4f18\u9177|\u7231\u5947\u827a/;
    //会员
    var batMember =/\u4f1a\u5458/;
    //华为
    var huawei = /\u534e\u4e3a/;
    //造车|问界
    var mkcar = /\u9020\u8f66|\u95ee\u754c/;
    var reDoubleArray=[chuxiao,yuan
                       ,batName,batMember
                       ,huawei,mkcar
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



    
    
