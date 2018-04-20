/**
 * 版权所有(C)2018 成都曦璞科技有限公司
 * 
 * 文件名file：  pages/me/me.js
 * 描述description：学车微信小程序学员端-个人信息页处理逻辑
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
    userInfo: {},
    userRealName: '姓名 读取中',
    userVerifyText:'状态 读取中',
    userVerifyClass:'color-bg-gray',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    "userBooking": [
      { "className": "", "text": "训练历史" },
      { "className": "", "text": "我的评价" },
      { "className": "", "text": "消息" }
    ],
    connectButton: [
      { className: "", text: "在线客服" }
    ],
    userPhone:[
      { className: "", text: "学车协议" }
    ],
    other: [
      { className:"", text: "反馈建议"},
      { className:"", text: "投诉电话"},
      { className: "", text: "关于阿甘学车" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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
   * 获取用户信息
   */
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})