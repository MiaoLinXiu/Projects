$(function(){
	$(".UI1 li").mouseover(function(){
		$(this).find("a:first-of-type").addClass("active");
		$(this).find(".turn_right").addClass("bg_light");
	});
	$(".UI1 li").mouseout(function(){
		$(this).find("a:first-of-type").removeClass("active");
		$(this).find(".turn_right").removeClass("bg_light");
	});
});
/*********分类点击显示下拉列***********/
$(function(){
	var count = 0;
	$(".fication").click(function(){
		if(count % 2 == 0) 
		{
			$(".products").slideDown();
			$(this).siblings(".seacrch_box").find(".seacrch_input").focus();
		}
		else $(".products").slideUp();
		count++;
	});
	$(".UI1 li").mouseover(function(){
		var index = $(this).index();
		$(".eachCategory").eq(index).show();
	});
	$(".UI1 li").mouseout(function(){
		var index = $(this).index();
		$(".eachCategory").eq(index).hide();
	});
	$(".eachCategory").mouseover(function(){
		var index = $(this).index();
		$(this).show();
		$(".UI1 li").eq(index-4).find("a:first-of-type").addClass("active");
		$(".UI1 li").eq(index-4).find(".turn_right").addClass("bg_light");
	});
	$(".eachCategory").mouseout(function(){
		var index = $(this).index();
		$(this).hide();
		$(".UI1 li").eq(index-4).find("a:first-of-type").removeClass("active");
		$(".UI1 li").eq(index-4).find(".turn_right").removeClass("bg_light");
	})
})
/****/
$(function(){
	$(".collect").mouseover(function(){
		$(this).find(".hover-desc").show();
	})
	$(".collect").mouseout(function(){
		$(this).find(".hover-desc").hide();
	});
	$(".out_box").mouseover(function(){
		$(this).find(".hover-desc").show();
	})
	$(".out_box").mouseout(function(){
		$(this).find(".hover-desc").hide();
	});
	
})
/**平面广告点击**/
$(function(){
	$(".products li").click(function(){
			var index = $(this).index();
			$(".seacrch_input").val("");
			$(".UI2 li").eq(index).show();
			$(".UI2 li").eq(index).siblings().hide();
	});
	$(".ad_xx").click(function(){
		$(this).parents("li").fadeOut();
	});
});
