/**
 * Created by 123 on 2018/8/22.
 */
$(function () {
    /*喜欢切换*/
    $(".main_all").on('click','.main_list_follow',function(){//保证新加载的内容也会执行相应的操作
        $(this).toggleClass("main_list_followOn");
    });
    /*删除当前这条内容*/
    //$(".main_list_do").each(function() {
    //    $(this).find("a:last").click(function(){
    //        $(this).parents(".main_list").fadeOut(300,function(){
    //            $(this).remove();
    //        });
    //    })
    //});
    $(".main_all").on('click','.Js_del',function() {//保证新加载的内容也会执行相应的操作
        $(this).parents(".main_list").fadeOut(300, function () {
            $(this).remove();
        });
    });
    //点击回复
    $(".main_all").on('click','.Js_apply',function() {//保证新加载的内容也会执行相应的操作
       $(this).parents('.main_list').find('.main_list_talk').slideToggle();
    });
    //评论
    $(".main_all").on('click','.main_list_text input',function() {//保证新加载的内容也会执行相应的操作
        var text = $(this).siblings("textarea").val();
        var html = '';
        html +=  '<li>';
        html += '<em><a href="#">胖虎：</a></em> ';
        html += '<p>'+text+'</p> ';
        html += '<span><a href="javascript:void(0)" class="Js_talk_res">回复</a><a href="javascript:void(0)" class="Js_talk_del">删除</a> </span>';
        html += '</li>';
        $(this).parent().siblings('ul').append(html);
        $(this).siblings("textarea").val('').focus();//清空输入框的值 并保持焦点
    });
    //删除评论
    $('.main_all').on('click','.Js_talk_del',function() {//保证新加载的内容也会执行相应的操作
        $(this).parents('li').fadeOut(300,function(){
            $(this).remove();
        });
    });
    //回复评论
    $('.main_all').on('click','.Js_talk_res',function() {//保证新加载的内容也会执行相应的操作
        var name = $(this).parent().siblings('em').text();
        $(this).parents('ul').siblings('.main_list_text').find('textarea').val('@'+name).focus();
    });
    //点击放大图片
    $('.main_all').on('click','.main_detail_img img',function() {//保证新加载的内容也会执行相应的操作
        var imgW = parseInt($(this).width());
        if (imgW < 510){
            $(this).css({
                float:'none',
                width:'510px',
                display:'block'
            })
        }
        else{
            $(this).css({
                float:'left',
                width:'200px',
                display:'block'
            })
        }
        var scrH = $(this).offset().top;
        $('body','html').animate({scrollTop:scrH},200);
    });
    //视频播放
    $('.main_all').on('click','.main_detail_videoImg',function() {//保证新加载的内容也会执行相应的操作
        var videoUrl = $(this).siblings('.main_detail_videoM').find('div').attr('data');
        var video = '<embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=g0731ibk8xo&auto=0" allowFullScreen="true" quality="high" width="510" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
        var text = '<a href="https://v.qq.com/?ptag=qqbsc" class="main_v_url" target="_blank">www.tengxunTV.com</a><a href="javascript:void(0)" class="main_v_xx">关闭视频</a>';
        $(this).hide();
        $(this).siblings('.main_detail_videoM').show();
        $(this).siblings('.main_detail_videoM').find('div').html(video);
        $(this).siblings('.main_detail_videoM').find('span').html(text);
    });
    //点击关闭视频
    $('.main_all').on('click','.main_v_xx',function() {
        $(this).parents('.main_detail_videoM').hide();
        $(this).siblings('.main_detail_videoM').find('div').html('');
        $(this).parents('.main_detail_videoM').siblings('.main_detail_videoImg').show();
    });
    //整体图点击缩放
        $('.main_all').on('click', '.main_detail_imagesLi', function () {
            var liW = $('.main_detail_images').find('li:first').width();
            if (liW <= 100) {
                $(this).css({
                    float: 'none',
                    width: '400px',
                    height: '400px'
                });
                $(this).find('img').css({width: '400px', height: '400px'});
                $(this).siblings().hide();
            }
            else {
                $(this).css({
                    float: 'left',
                    width: '100px',
                    height: '100px'
                });
                $(this).find('img').css({width: '100px', height: '100px'});
                $(this).siblings().show();
            }
            var scrH = $(this).offset().top;
            $('body','html').animate({scrollTop:scrH},200);
        });
    //模拟滚动下拉刷新出新的内容
    $(window).scroll(function(){
        var winH = $(window).height();//可视高度
        var webH = $('html').height();//网页可视高度
        var scrH = $('body').scrollTop() + $('html').scrollTop();//body支持chrome等，html支持TE和火狐等。滚动高度
        if (scrH >= webH - winH){
            $.get("js/list.txt",function(data){
                var html = '';
                html += '<div class="main_list">';
                html += '<a href="#" class="main_list_header"><img src="'+data.img+'" width="58" height="58" alt="头像"/> </a>';
                html += '<div class="main_list_M">';
                html += '<div class="main_list_top">';
                html += '<em class="main_list_username"><a href="#">'+data.useName+'</a></em>';
                html += '<em class="main_list_follow"><a href="javascript:void(0)">喜欢</a></em>';
                html += '<em class="main_list_share"><a href="#">转载</a></em>';
                html += '</div>';
                html += '<h3 class="main_list_tit"><a href="#">'+data.title+'</a></h3>';
                html += '<div class="main_detail">';
                html += '<div class="main_detail_img">';
                html += data.detail;
                html += '</div>';
                html += '</div>';
                html += '<div class="main_list_time">'+data.time[0]+'<br/>'+data.time[1]+'<br/>'+data.time[2]+'</div>';
                html += '<div class="main_list_other">';
                html += '<dl class="main_list_tag">';
                html += '<dt>标签：</dt>';
                //html += '<dd><a href="#">#'+data.tag[0]+'</a></dd>';
                //html += '<dd><a href="#">#'+data.tag[1]+'</a></dd>';
                for (var i = 0; i < data.tag.length; i++){
                    html += '<dd><a href="#">#'+data.tag[i]+'</a></dd>';
                }
                html += '</dl>';
                html += '<div class="main_list_do">';
                html += '<a href="javascript:void(0)" class="Js_apply">回应</a>';
                html += '<a href="#">编辑</a>';
                html += '<a href="javascript:void(0)"  class="Js_del">删除</a>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="main_list_talk" style="display: none">';
                html += '<div class="main_list_text">';
                html += '<i></i>';
                html += '<textarea></textarea>';
                html += '<input type="button" value="回应"/>';
                html += '</div>';
                html += '<ul>';
                //html += '<li>';
                //html += '<em><a href="#">张志明：</a></em>';
                //html += '<p> 说到乔布斯，你会自然想到那个被咬掉一口的苹果标志。</p>';
                //html += '<span><a href="javascript:void(0)">回复</a><a href="javascript:void(0)">删除</a></span>';
                //html += '</li>';
                //html += '<li>';
                //html += '<em><a href="#">余春娇：</a></em>';
                //html += '<p>了解苹果的人都知道，每一件苹果发布的产品或者系统软件，都凝聚着乔布斯的心血。</p>';
                //html += '<span><a href="javascript:void(0)">回复</a><a href="javascript:void(0)">删除</a></span>';
                //html += '</li>';
                //html += '<li>';
                //html += '<em><a href="#">月未央：</a></em>';
                //html += '<p>沙发了沙发了</p>';
                //html += '<span><a href="javascript:void(0)">回复</a><a href="javascript:void(0)">删除</a></span>';
                //html += '</li>';
                html += '</ul>';
                html += '</div>';
                html += '</div>';
                $(".main_all").append(html);
            },'json');
        }
    });
    //搜索
    $('.main_search_text').focus(function(){
        $(this).parent().addClass('main_search_on');
    });
    $('.main_search_text').blur(function(){
        $(this).parent().removeClass('main_search_on');
    });
    $('input[focusValue]').each(function(){
        $(this).focus(function(){
            var value = $.trim($(this).val());
            if (value == $(this).attr('focusValue')){
                $(this).val('');
            }
        });
        $(this).blur(function(){
            var value = $.trim($(this).val());
            if (value == ''){
                $(this).val($(this).attr('focusValue'));
            }
            $(this).siblings('span').hide();
        });
    });
    $('form').each(function(){
        $(this).submit(function(){
            var attrText = $(this).find('input[focusValue]').attr('focusValue');
            var valText = $(this).find('input[focusValue]').val();
            if(valText == '' || valText == attrText){
                $(this).find('.main_search_info').show();
                $(this).find('input[focusValue]').focus();
                return false;
            }
        })
    });

    /***公告关闭打开***/
    $('.main_info span').click(function(){
        if($(this).text() == '-'){
            $(this).text('+');
            $(this).parents('.main_info').css('paddingBottom','0px');
            $(this).parents('.main_info').find('ul').slideToggle();
        }
        else{
            $(this).text('-');
            $(this).parents('.main_info').find('ul').slideToggle();
            $(this).parents('.main_info').css('paddingBottom','30px');
        }
    })
    });