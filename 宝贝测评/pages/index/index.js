//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    bgcolor:'#EBEBEB',
    active:'#CDCDCD',
    pageInfo:[
      {
      bgSrc:'../../images/firstbg.png',
      title:'系统每月测评更了解孩子',
      small:'避免错误教育遗憾终生',
      mode: 'scaleToFill'
      },
      {
        bgSrc: '../../images/secondbg.png',
        title: '培养宝宝成长的关键期',
        small: '宝宝行为能力、语言表达、逻辑思维',
        mode: 'scaleToFill'
      },
      {
        bgSrc: '../../images/thirdbg.png',
        title: '制定个性化的家庭训练方案',
        small: '认知、表达、运动等全方位综合测评',
        mode: 'scaleToFill'
      }
    ]
  },
  //事件处理函数
  nextPage: function() {
    // wx.navigateTo({
    //   url: '../loginSecond/loginSecond'
    // })
  },
  onLoad: function () {  
  }
})
