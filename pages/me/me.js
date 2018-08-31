/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
*/

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //投诉电话
    complaintPhone: '02867873121',
    //用户信息
    userInfo: {},
    userRealname:"郑维一",
    userStatus: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //功能按钮
    "userBooking": [
      { "className": "", "text": "学车记录", "url": "bill/bill", "openType": "navigate", "bindtap": "" },
      { "className": "", "text": "个人信息", "url": "personal/personal", "openType": "navigate", "bindtap": "" },
      //{ "className": "", "text": "消息", bindtap: "" }
    ],
    //用户信息
    userPhone:[
      { className: "", text: "手机号 读取中", bindtap: "" }
    ],
    //小程序
    miniProgram: [
      { className: "", text: "阿甘校园购", target: "miniProgram", openType: "navigate", appId: "wx6f53b2295b1349d9", path: "", bindtap: "" }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 获取用户微信信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // 传入全局小程序名称
    var globalAppName = app.globalData.appName;
    this.setData({
      appName: globalAppName,
    })
    // 传入全局用户信息
    this.getUserPersonalInfo()
    // 传入教练信息
    if (this.data.personalInfo.coachId != null) {
      this.getCoachInfo()
    }
    
    // 设置用户状态图标
    switch (this.data.personalInfo.userStatus) {
      case 0: this.setData({ userStatus: ["gray", "未报名"]});break;
      case 1: this.setData({ userStatus: ["primary", "已报名"] }); break;
      case 2: this.setData({ userStatus: ["pass", "已预约"] }); break;
      case 3: this.setData({ userStatus: ["primary", "已毕业"] }); break;
      default: this.setData({ userStatus: ["gray", "未报名"] }); break;
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
   * 获取微信用户信息
   */
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo != null) {
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  },

  /**
   * 加载全局用户个人信息
   */
  getUserPersonalInfo: function () {
    let userPersonal = app.globalData.userPersonalInfo
    var that = this
    that.setData({
      personalInfo: userPersonal
    });
  },

  /**
   * 加载全局教练信息
   */
  getCoachInfo: function () {
    let coachInfo = app.globalData.coachInfo
    var that = this
    that.setData({
      coachInfo: coachInfo
    })
  },

  /**
   * 拨打电话
   */
  complaint: function() {
    console.log('用户拨打投诉电话')
    wx.makePhoneCall({
      phoneNumber: this.data.complaintPhone,
      success(res) {
        console.log('用户拨打电话成功')
      },
      fail(res) {
        console.log('用户取消了拨打')
      }
    })
  },

  /**
   * 关于
   */
  clickAbout: function() {
    wx.navigateTo({
      url: '../supportInfo/about/about',
      success(res) {
        console.log('打开“关于”页面成功')
      },
      fail(res) {
        console.log('打开“关于”页面失败')
      },
    })
  }
})