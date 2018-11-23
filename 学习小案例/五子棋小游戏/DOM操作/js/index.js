window.onload = function () {
        var aLi = document.querySelectorAll("li");
        var aSpan = document.querySelectorAll("span");
        var oImgbox = document.querySelector(".imgBox");
				var btnL = document.querySelector(".left_btn");
				var btnR = document.querySelector(".right_btn");
        var aName = [];//存放类名的数组
        var index = 0;//初始索引值
        setColor();
        for (var item of aLi) {
            //for of 循环遍历数组中的每一个元素本身
            aName.push(item.classList[0]);
        }
        function nextPic() {//向下翻页
            aName.unshift(aName[5]);//把名字数组最后一个值赋值并插入到数组第一个位置
            // 0 1 2 3 4 5  -> 5 0 1 3 4 5
            aName.pop();//删除数组最后一个元素 变成 5 0 1 2 3 4
            for (var i = 0; i < aLi.length; i++){
                aLi[i].setAttribute('class',aName[i]);
            }
            index++;
            if (index > 5) {
                index = 0;
            }
            setColor();
        }
        function prvePic() {//向上翻页
            aName.push(aName[0]);//把名字数组第一个值赋值并插入到数组最后一个位置
            // 0 1 2 3 4 5  ->  0 1 2 3 4 5 0
            aName.shift();//删除数组第一个元素 变成 1 2 3 4 5 0
            for (var i = 0; i < aLi.length; i++){
                aLi[i].setAttribute('class',aName[i]);
            }
            index--;
            if (index < 0) {
                index = 5;
            }
            setColor();
        }
        function setColor() {
            for (var items of aSpan ){
                items.style.backgroundColor = "#ccc";
            }
            aSpan[index].style.backgroundColor = "#45c17c";
        }

//         oImgbox.addEventListener("click",function (ev) {//添加监听器判断点击的是哪块地方
//             //console.log(mouse.event);//输出鼠标事件
//             ev = ev || window.event;//兼容处理
//             var ele = ev.target.parentNode;//点中的img图片的父节点li元素
//             var parentName = ele.classList[0];//获取元素的类名
//             // var parentName = ele.getAttribute('class');// 等于var parentName = ele.classList[0];
//             // console.log(parentName);
//             switch (parentName){
//                 case "list1":
//                     prvePic();//向上翻页
//                     break;
//                 case "list3":
//                     nextPic();//向下翻页
//                     break;
//             }
//         });
		btnL.onclick = function(){
			prvePic();
		}
		btnR.onclick = function(){
			nextPic();
		}
    }
