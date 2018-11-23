//广告倒计时
var adTop = document.getElementById("adTop");
var adTopem = adTop.getElementsByTagName("em")[0];
var adTopI = document.querySelector("#adTop span i");
function adClose(num) {
    num--;
    if(num == 9){
        adTopem.innerHTML = "九";
    }
    else if(num == 8){
        adTopem.innerHTML = "八";
    }
    else if(num == 7){
        adTopem.innerHTML = "七";
    }
    else if(num == 6){
        adTopem.innerHTML = "六";
    }
    else if(num == 5){
        adTopem.innerHTML = "五";
    }
    else if(num == 4){
        adTopem.innerHTML = "四";
    }
    else if(num == 3){
        adTopem.innerHTML = "三";
    }
    else if(num == 2){
        adTopem.innerHTML = "二";
    }
    else if(num == 1){
        adTopem.innerHTML = "一";
    }
    else if(num == 0){
       adCloseDo(0);
       return;
    }
    return setTimeout(function(){adClose(num);},1000);//执行递归
}
function adCloseDo(height) {
    height+=4;
    if (height <= 80){
        adTop.style.marginTop = -height + 'px';
        return setTimeout(function (){adCloseDo(height);},20);//执行递归
    }
    else{
        adTop.parentNode.removeChild(adTop);//隐藏完了删除广告节点
    }
}
adClose(11);
adTopI.onclick = function () {
    adCloseDo(0);
}
//***********************网站导航下拉菜单****************************/
var loginRegNav = document.getElementById("loginReg_nav");
var loginRegNavSpan = loginRegNav.getElementsByTagName("span")[0];
var loginRegNavUI = loginRegNav.getElementsByTagName("ul")[0];
loginRegNav.onmouseover = function () {
    //loginRegNavSpan.classList.add("loginReg_nav_cur"); 两种方式添加类名
    loginRegNavSpan.className = "loginReg_nav_cur";
    loginRegNavUI.style.display = "block";
}
loginRegNav.onmouseout = function () {
    //loginRegNavSpan.classList.remove("loginReg_nav_cur"); 移除类名
    loginRegNavSpan.className = "";
    loginRegNavUI.style.display = "none";
}
//***********************城市选择****************************/
var uls = document.querySelectorAll("#area_all ul");
var lis = document.querySelectorAll("#area_main_nav li");
var areaXX = document.getElementById("area_xx");
var areaAll = document.getElementById("area_all");
var areaSpan = document.getElementById("logo_span");
// console.log(lis);
for(var i = 0; i < lis.length; i++) {
    lis[i].onclick = (function (j) {//闭包
        var newNum = j, oldNum;
        return function () {
            //j就是当前li的位置
            if (this.className == "area_cur") {
                return;//直接跳出
            }
            for (var k = 0; k < lis.length; k++) {
                if (lis[k].className == "area_cur") {
                    oldNum = k;//旧的位置
                    break;//跳出循环
                }
            }
            // console.log(oldNum);
            lis[newNum].className = "area_cur";
            lis[oldNum].className = "";
            uls[newNum+2].style.display = "block";
            uls[oldNum+2].style.display = "none";
        }
    })(i);
}
areaXX.onclick = function () {
    // var num = 0;
    // var timer = setInterval(function () {
    //     num += 5;
    //     if(num <= 100) {
    //         areaAll.style.marginTop = -num+"%";
    //     }
    // },1.5)
    areaUp(0);
}
function  areaUp(num) {
    num+=5;
    if (num <= 100) {
        areaAll.style.marginTop = -num+"%";
        return setTimeout(function () {areaUp(num);},20)//递归完成
    }
    else {
        areaAll.style.display = "none";
    }
}
areaSpan.onclick = function () {
    areaDown(0);
}
function  areaDown(num) {
    if(num ==0){
        areaAll.style.display = "";
    }
    num+=5;
    if (num <= 100) {
        areaAll.style.marginTop = (-100+num)+"%";
        return setTimeout(function () {areaDown(num);},20)//递归
    }
}
//选择城市
//  var areaUls = document.getElementById("area_all").getElementsByTagName("ul");
    var areaI = areaSpan.getElementsByTagName("i")[1];
    for (var i = 0; i < uls.length; i++) {
        if (uls[i].className == "area_main_nav"){
            continue;
        }
        var areaLis = uls[i].getElementsByTagName("li");//在内部得到
        for (var j = 0; j < areaLis.length; j++) {
            areaLis[j].onclick = function () {
                areaI.innerHTML = this.innerText || this.textContent;//兼容
                areaUp(0);
            }
        }
    }
/*第一块，列表切换*/
(function () {
    var indexOneLis = document.querySelectorAll("#indexOneLnav li");
    for(var i = 0; i < indexOneLis.length; i++){
        indexOneLis[i].onmouseover = (function (j) {
            return function () {
                this.className = "index_one_Li"+(j+1)+"Cur";
                var chNodes = this.childNodes;
                for(var k = 0; k < chNodes.length; k++){
                    if(chNodes[k].className == "index_one_LMain"){
                        chNodes[k].style.display = "block";
                        break;
                    }
                }
            }
        })(i);

        indexOneLis[i].onmouseout = (function (j) {
            return function () {
                // this.className = this.className.substring(0,this.className.lastIndexOf(' '));
                this.className = "index_one_Li"+(j+1);
                var chNodes = this.childNodes;
                for(var k = 0; k < chNodes.length; k++){
                    if(chNodes[k].className == "index_one_LMain"){
                        chNodes[k].style.display = "none";
                        break;
                    }
                }
            }
        })(i);
    }
})();
/**************轮播图*********************/
(function () {
    var indexOneMFlash = document.querySelectorAll("#indexOneMFlash ul");
    var indexOneMFlashU1Lis = indexOneMFlash[0].getElementsByTagName("li");
    var indexOneMFlashU2Lis = indexOneMFlash[1].getElementsByTagName("li");
    for(var i = 0; i < indexOneMFlashU2Lis.length; i++){
        indexOneMFlashU2Lis[i].onmouseover = (function (j) {
            return function () {
                if(this.className == "index_o_mCur"){
                    return;
                }
                var newNum = j,oldNum;
                for(var k = 0; k < indexOneMFlashU2Lis.length; k++){
                    if (indexOneMFlashU2Lis[k].className == "index_o_mCur"){
                        oldNum = k;
                    }
                }
                indexOneMFlashU2Lis[newNum].className = "index_o_mCur";
                indexOneMFlashU2Lis[oldNum].className = "";
                opacityULFlash(0,newNum,oldNum);
            }
        })(i);
    }
    function opacityULFlash(num,newNum, oldNum) {
        if (num == 0) {
            indexOneMFlashU1Lis[newNum].className = "index_o_mICur";
            indexOneMFlashU1Lis[oldNum].className = "";
        }
        num+=10;
        if (num <= 100){
            indexOneMFlashU1Lis[newNum].style.opacity = num/100;
            indexOneMFlashU1Lis[oldNum].style.filter = "alpha(opacity="+num+")";//IE
            indexOneMFlashU1Lis[oldNum].style.opacity = 1 - num/100;
            indexOneMFlashU1Lis[oldNum].style.filter = "alpha(opacity="+(100 - num)+")";//IE
            return setTimeout(function () {
                opacityULFlash(num,newNum, oldNum);
            },20);
        }
    }
    function opacityULFlashAuto() {
        var newNum,oldNum;//newNum表示当前位置，oldNum表示之前位置，
        var last = indexOneMFlashU2Lis.length - 1;
        for (var x = 0; x < indexOneMFlashU2Lis.length; x++){
            if (indexOneMFlashU2Lis[x].className == "index_o_mCur") {
                oldNum = x;
            }
        }
        if(oldNum != last){
            newNum = oldNum + 1;
        }
        else{
            newNum = 0;
        }
        indexOneMFlashU2Lis[newNum].className = "index_o_mCur";
        indexOneMFlashU2Lis[oldNum].className = "";
        opacityULFlash(0,newNum,oldNum);
    }
    var timer = setInterval(opacityULFlashAuto,3000);
    indexOneMFlash.onmouseover = function () {
        clearInterval(timer);
    }

    indexOneMFlash.onmouseout = function () {
        timer = setInterval(opacityULFlashAuto,3000);
    }
})();
/**************第一块右边切换*********************/
(function () {
    var indexOrUITit = document.getElementById("indexOrUITit");
    var indexOrUITitLis = indexOrUITit.getElementsByTagName("li");
    var indexOrUIDiv0 = document.getElementById("indexOrUIDiv0");
    var indexOrUIDiv1 = document.getElementById("indexOrUIDiv1");
    var indexArr = [indexOrUIDiv0,indexOrUIDiv1];
    for (var i = 0; i < indexOrUITitLis.length; i++){
        indexOrUITitLis[i].onmouseover = (function (j) {
            return function () {
                if(this.className == "index_o_rUITitCur"){
                    return;
                };
                var newNum = j,oldNum;
                for (var k = 0; k < indexOrUITitLis.length; k++){
                    if(indexOrUITitLis[k].className == "index_o_rUITitCur"){
                        oldNum = k;
                        break;
                    }
                }
                indexOrUITitLis[newNum].className = "index_o_rUITitCur";
                indexOrUITitLis[oldNum].className = "";
                indexArr[newNum].style.display = "block";
                indexArr[oldNum].style.display = "none";
            }
        })(i);
    }
})();
function trim(str) {//删除左右两端的空格
    return str.replace(/(^s\*) | (\s*$)/g,"");
}
/**************第二块搜索框*********************/
(function () {
    var searchMain = document.querySelectorAll("#searchMain input")[0];
    searchMain.onfocus = function () {
        var val = trim(this.value);
        if (val == "请输入您的品牌和机型，看看您的宝贝还值多少钱？") {
            this.value = "";
            this.style.color = "#000";
        }
    }
    searchMain.onblur = function () {
        var val = trim(this.value);
        if (val == "") {
            this.value = "请输入您的品牌和机型，看看您的宝贝还值多少钱？";
            this.style.color = "#8c8c8c";
        }
    }

})();
/*************固定搜索框*********************/
(function () {
    var searchMain = document.querySelectorAll("#searchMainFixed input")[0];
    searchMain.onfocus = function () {
        var val = trim(this.value);
        if (val == "请输入您的品牌和机型，看看您的宝贝还值多少钱？") {
            this.value = "";
            this.style.color = "#000";
        }
    }
    searchMain.onblur = function () {
        var val = trim(this.value);
        if (val == "") {
            this.value = "请输入您的品牌和机型，看看您的宝贝还值多少钱？";
            this.style.color = "#8c8c8c";
        }
    }
    var search = document.getElementById("search");
    var searchFixed = document.getElementById("searchFixed");
    var webHeight = search.offsetTop + 183;
    window.onscroll = function () {
        var scrollH = document.documentElement.scrollTop + document.body.scrollTop;
        //document.documentElement.scrollTop 支持IE和火狐 、document.body.scrollTop支持chrome.opera等
        if(scrollH >= webHeight){
            searchFixed.style.display = "block";
        }
        else{
            searchFixed.style.display = "none";
        }
    }

})();
/**************产品切换*********************/
(function () {
    // var productLML = document.querySelectorAll(".product_l_mL dl dd");
    // var productI = document.querySelectorAll(".product_l_mL dl dd i");
    // for (var i = 0; i < productLML.length; i++) {
    //     productLML[i].onmouseover = (function (j) {
    //         return function () {
    //             if (this.className = "product_l_I"){
    //                 return;
    //             }
    //             var newNum = j,oldNum;
    //             for (var k = 0; k < productLML.length; k++){
    //                 if (productI[k].className == "product_l_I"){
    //                     oldNum = k;
    //                     break;
    //                 }
    //             }
    //             productI[newNum].className == "product_l_I";
    //             productI[oldNum].className == "";
    //             productI[newNum].style.display = "block";
    //             productI[oldNum].style.display = "none";
    //
    //         }
    //     })(i);
    // }
    function qieHuan(ddId,ulId) {//ddId表示dd对应父元素div的ID;ulId表示ul对应父元素div的ID;
        var ddNodes = document.getElementById(ddId).getElementsByTagName("dd");
        var ulNodes = document.getElementById(ulId).getElementsByTagName("ul");
        for (var i = 0; i < ulNodes.length; i++) {
            ddNodes[i].onmouseover = (function (j) {
                return function () {
                    if (this.className == "pro_l_mLCur") {
                        return;
                    }
                    var oldNum,newNum = j;
                    for (var k = 0; k < ulNodes.length; k++){
                        if(ddNodes[k].className == "pro_l_mLCur"){
                            oldNum = k;
                            break;
                        }
                    }
                    this.className = "pro_l_mLCur";
                    ddNodes[oldNum].className = "";
                    ulNodes[newNum].style.display = "block";
                    ulNodes[oldNum].style.display = "none";
                }
            })(i);
        }
        if (ddNodes[ddNodes.length - 1].getAttribute("node") == "none"){
            ddNodes[ddNodes.length - 1].onmouseover = function () {
                this.className = "pro_l_mLCur";
            }
            ddNodes[ddNodes.length - 1].onmouseout = function () {
                this.className = "";
            }
        }
    }
    for (var i = 0; i < document.querySelectorAll(".product_left .product_l_main").length; i++)
    {
        qieHuan("product"+i+"","productUI"+i+"");
    }
})();
/******成交向上移动*******/
(function () {
    var productClinch = document.getElementById("productClinch");
    var productClinchLis = productClinch.getElementsByTagName("li");
    function liToTop(num) {
        num+=2;
        if(num <= 72) {
            productClinchLis[0].style.marginTop = -num + "px";
            return setTimeout(function () {
                liToTop(num);
            }, 20);
        }
        else {
            productClinch.appendChild(productClinchLis[0]);
            productClinchLis[productClinchLis.length - 1].style.marginTop = "0px";
        }
    }
    clearInterval(timer);
    var timer = setInterval(function () {
        liToTop(0);
    },1500);
    productClinch.onmouseover = function () {
        clearInterval(timer);
    }
    productClinch.onmouseout = function () {
        var timer = setInterval(function () {
            liToTop(0);
        },2000);
    }
})();


