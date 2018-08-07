/**
 * 阿甘学车 (https://github.com/EpearthLtd/aganWeixing)
 * 版权所有(C)2018 成都曦璞科技有限公司
 * Licensed under the MIT license
 * 
 * 文件名file：pages/me/personal/personal.js
 * 描述description：学车微信小程序学员端-个人页处理逻辑
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
 */

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    personalInfo:{} // 用户个人信息
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 传入全局用户信息
    this.getUserPersonalInfo()
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

  /**
   * 加载全局用户个人信息
   */
  getUserPersonalInfo: function() {
    let userPersonal = app.globalData.userPersonalInfo
    var that = this
    that.setData({
      personalInfo: userPersonal
    });
    console.log('加载全局用户信息：')
    console.log(that.data.personalInfo)
  }
})