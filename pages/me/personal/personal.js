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
    console.log(that.data.personalInfo)

    // 设置训练进度名称
    var licenceTypeName = 'personalInfo.licenceTypeName'
    switch (that.data.personalInfo.licenceType) {
      case 0: that.setData({ [licenceTypeName]: 'A1' }); break;
      case 1: that.setData({ [licenceTypeName]: 'A2' }); break;
      case 2: that.setData({ [licenceTypeName]: 'A3' }); break;
      case 3: that.setData({ [licenceTypeName]: 'B1' }); break;
      case 4: that.setData({ [licenceTypeName]: 'B2' }); break;
      case 5: that.setData({ [licenceTypeName]: 'C1' }); break;
      case 6: that.setData({ [licenceTypeName]: 'C2' }); break;
      case 7: that.setData({ [licenceTypeName]: 'C3' }); break;
      case 8: that.setData({ [licenceTypeName]: 'C4' }); break;
      case 9: that.setData({ [licenceTypeName]: 'C5' }); break;
      case 10: that.setData({ [licenceTypeName]: 'D' }); break;
      case 11: that.setData({ [licenceTypeName]: 'E' }); break;
      case 12: that.setData({ [licenceTypeName]: 'F' }); break;
      case 13: that.setData({ [licenceTypeName]: 'M' }); break;
      case 14: that.setData({ [licenceTypeName]: 'N' }); break;
      case 15: that.setData({ [licenceTypeName]: 'P' }); break;
      default: that.setData({ [licenceTypeName]: '驾照类型错误' }); break;
    }

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