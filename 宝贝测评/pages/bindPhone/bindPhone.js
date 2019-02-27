//bindPhone.js
//获取应用实例
const app = getApp()

Page({
  data: {
    InputValue: {//手机号码
      telUrl:'../../images/icon_login_number.png',
      telNum:''
    },
    InputCode:{//验证码
      ideUrl: '../../images/icon_login_password.png',
      codeNum: ''
    },
    msg:{
      getIndentify:'获取验证码',
      seconds:60
    },
    // 组件所需的参数
    navbarData: {
      showCapsule: 1, //是否显示左上角图标
      title: '0到6岁测评计划', //导航栏 中间的标题
    },

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,

  },
  //事件处理函数
  bindview: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
  },
  //表单提交函数
  bindSubmit:function(){

  },
  //点击绑定按钮触发
  btnSubmit:function(){

  },
  //获取验证码
  getCode:function(){
    var second = this.data.msg.seconds;//60s倒计时
    var that = this;
    var timer = setInterval(function(){
      that.setData({
        'msg.getIndentify': second + 's后重试',
      })
      second--;
      if (second == -2) {
        that.setData({
          'msg.getIndentify': '获取验证码'
        })
        clearInterval(timer)
      }
    },1000)
  }
});

 
