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
    //投诉电话
    complaintPhone: '02867873121',
    //用户信息
    userInfo: {},
    userRealName: '姓名 读取中',
    userVerifyText:'状态 读取中',
    userVerifyClass:'color-bg-gray',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //功能按钮
    "userBooking": [
      { "className": "", "text": "学车记录", bindtap: "clickBill" },
      { "className": "", "text": "我的评价", bindtap: "" },
      //{ "className": "", "text": "消息", bindtap: "" }
    ],
    connectButton: [
      { className: "", text: "在线客服", openType: "contact" }, //最低版本1.1.0 未兼容处理
      { className: "", text: "BUG反馈", openType: "feedback" } //最低版本2.1.0 未兼容处理
    ],
    userPhone:[
      { className: "", text: "手机号 读取中", bindtap: "" }
    ],
    miniProgram: [
      { className: "", text: "阿甘校园购", bindtap: "clickSchoolStore" }
    ],
    other: [
      { className: "", text: "投诉电话", bindtap: "complaint" },
      { className: "", text: "学车协议", bindtap: "clickCompact" },
      { className: "", text: "关于阿甘学车", bindtap: "clickAbout" }
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
  },

  /**
   * 用户点学车记录
   */
  clickBill: function () {
    console.log('用户点击“学车记录”按钮')
    wx.navigateTo({
      url: '../me/bill/bill',
      success: console.log('打开“学车记录”页面成功'),
      fail: console.log('打开“学车记录”页面失败'),
    })
  },

  /**
   * 打开阿甘校园购
   */
  clickSchoolStore: function () {
    if (wx.navigateToMiniProgram) {
      wx.navigateToMiniProgram({
        appId: 'wx6f53b2295b1349d9',
        success(res) {
          // 打开成功
          console.log('成功打开小程序“阿甘校园购”')
        }
      })
    } else {
      //微信版本过低不支持wx.navigateToMiniProgram
      console.log('微信版本过低不支持wx.navigateToMiniProgram')
      wx.showModal({
        title: '打开阿甘校园购失败',
        content: '您的微信版本过低，请升级到最新版本',
        showCancel: false,
        success(res) {
          console.log('提示阿甘校园购打开失败')
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
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
   * 学车协议
   */
  clickCompact: function() {
    wx.navigateTo({
      url: '../supportInfo/compact/compact',
      success(res) {
        console.log('用户打开了“学车协议”页面')
      },
      fail(res) {
        console.log('打开“学车协议”页面失败')
      },
    })
  },

  /**
   * 关于阿甘学车
   */
  clickAbout: function() {
    wx.navigateTo({
      url: '../supportInfo/aboutAgan/aboutAgan',
      success(res) {
        console.log('打开“关于阿甘学车”页面成功')
      },
      fail(res) {
        console.log('打开“关于阿甘学车”页面失败')
      },
    })
  }
})