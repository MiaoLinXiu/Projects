window.onload = function(){
	/*****只能输入数字输入框*****/
	var oInput = document.querySelectorAll('input[type="text"]');
	var reset = document.querySelector(".reset");
	var header = document.querySelector(".all_list");
	var add = document.querySelector(".add");
	var day = document.querySelector(".average_day");
	var sum = document.querySelector(".total_all");
	var childs = header.childNodes;
	var lis,sumpay = 0,averpay = 0;
	for(var i = 0; i < oInput.length; i++){
		oInput[i].setAttribute("onkeyup","value=value.replace(/[^\\d]/g,'')");
	}
	/*****重置*****/
	reset.onclick = function(){
		for(var i = 0; i < oInput.length; i++){
			oInput[i].value = "";
		}
		for(var i = childs.length -1; i >= 0; i--){
			header.removeChild(childs[i]);
		}
		day.innerHTML = "￥0.00"
		sum.innerHTML = "￥0.00";
	}
	/****添加*****/
	add.onclick = function(){
		var ele = document.createElement("ul");
		ele.className = "xiangxi";
		for(var i = 0; i < oInput.length; i++){
			lis = document.createElement("li");
			if(oInput[i].value != ""){
				lis.innerHTML = "￥"+oInput[i].value; 
			}
			else{
				lis.innerHTML = "￥0.00";
			}
			ele.appendChild(lis);
			sumpay+=Number(oInput[i].value);
		}
		averpay = Number(sumpay/oInput.length).toFixed(2);
		day.innerHTML = "￥"+averpay;
		sum.innerHTML = "￥"+sumpay+".00";
		header.appendChild(ele);
	}
}