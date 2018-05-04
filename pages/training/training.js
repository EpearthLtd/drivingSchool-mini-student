/**
 * 版权所有(C)2018 成都曦璞科技有限公司
 * 
 * 文件名file：pages/training/training.js
 * 描述description：学车微信小程序学员端-约车训练功能页处理逻辑
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
 */

Page({

  /**
   * 页面的初始数据
   */
  data: {
    adImage: 'http://www.epearth.com/testimg/agan.png',
    "button": [
      { "classWrapper": "bd-bottom bd-right", "image": "../../images/time.png", "text": "时间表", "bindTap": "" },
      { "classWrapper": "bd-bottom", "image": "../../images/phone.png", "text": "联系教练", "bindTap": "" },
      { "classWrapper": "bd-right", "image": "../../images/log.png", "text": "学车记录", "bindTap": "" },
      { "classWrapper": "", "image": "../../images/caocao.png", "text": "曹操专车", "bindTap": "" }
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

  clickNoPage: function() {
    wx.navigateTo({
      url: '../nopage/nopage',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})