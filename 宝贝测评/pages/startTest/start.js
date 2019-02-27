// pages/startTest/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    childInfo:{
      name:'黄小希',
      age:'1岁6个月',
      sex:'女'
    },
    Kindergarten:{
      logoUrl:'../../images/logo_baobaoxiong.png',
      mode:'scaleToFill',
      intro:'园所简介说明，本院所有多少个老师，从事早教行业多少年，通过多年的经验总结，实现了怎么样的测评报告，我们的测评 是按照国际统一标准以及中国早教之母区慕洁，以及本园所多年的测评心得搭建而成！'
    },
    aboutUs:{
      technical:'抱抱熊双流早教中心提供技术支持',
      quick:'3分钟了解我们'
    }
  },
  /***点击测试按钮触发 */
  TestBegin:function(){
    console.log(1);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})