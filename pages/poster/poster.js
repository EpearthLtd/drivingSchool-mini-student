// pages/poster/poster.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carousels:[
      { url: 'http://www.epearth.com/testimg/logo.png' },
      { url: 'http://www.epearth.com/testimg/agan.png' },
      { url: 'http://www.epearth.com/testimg/logo.png' }
    ],
    className:[
      { string: '手动挡'},
      { string: '自动挡'}
    ]
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
  
  },

  clickPromise: function () {
    wx.navigateTo({
      url: '../promise/promise',
    })
  },
})