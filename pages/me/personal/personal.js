/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
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
    var that = this
    // 传入全局用户信息
    this.getUserPersonalInfo()

    // 设置训练进度名称
    var progressName = 'personalInfo.progressName'
    switch (that.data.personalInfo.progress) {
      case 0: that.setData({ [progressName]: '科目一' }); break;
      case 1: that.setData({ [progressName]: '科目二' }); break;
      case 2: that.setData({ [progressName]: '科目三' }); break;
      case 3: that.setData({ [progressName]: '科目四' }); break;
      default: that.setData({ [progressName]: '训练进度异常' }); break;
    }
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
    console.log('页面显示')
    //返回当前页面后重新加载
    this.onLoad()
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
  },
})