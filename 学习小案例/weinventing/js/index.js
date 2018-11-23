
/**************导航点击***************/
$(function(){
	$(".UI1 li").click(function(){
		$(this).find("a").addClass("active");
		$(this).siblings().find("a").removeClass("active");
	})
});
/**************产品中心***************/
$(function(){
	$(".dl1 dd").mouseover(function(){
		$(this).find("a").addClass("active1");
		$(this).find("a input").addClass("active2");
	});
	$(".dl1 dd").mouseout(function(){
		$(this).find("a").removeClass("active1");
		$(this).find("a input").removeClass("active2");
	})
})