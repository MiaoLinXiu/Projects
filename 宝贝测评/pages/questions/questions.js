// pages/questions/questions.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions:{
      ques1:'孩子面前摆放一排扣子 “给扣子排队”'
    },
    answers:[
      {'ans':'独立给扣子排队'},
      {'ans':'提醒宝宝才能完成'},
      {'ans':'帮助宝宝完成'},
      {'ans':'能够拿起扣子'},
      {'ans':'不会'}
    ],
    pages:{
      nowpage:1,
      allpages:26
    },
    techsupport:'抱抱熊提供测评库数据支持'
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