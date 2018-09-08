/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
*/

const app = getApp()
let globalRootDomain = app.globalData.rootDomain;
let globalSourceDomain = app.globalData.sourceDomain;
let globalRequestDomain = app.globalData.requestDomain

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置全局根域名
    this.setData({
      rootDomain: globalRootDomain,
      sourceDomain: globalSourceDomain,
      requestDomain: globalRequestDomain
    })
    // 设置logo完整src
    var logoSrc = globalSourceDomain + '/images/agan.png';
    this.setData({
      logo: logoSrc
    })
    // 传入全局小程序名称并设置页面标题
    var globalAppName = app.globalData.appName;
    this.setData({
      appName: globalAppName,
    })
    wx.setNavigationBarTitle({
      title: '关于' + globalAppName,
    })
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