/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
*/

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    adImage: '',
    messageTitle: '提示',
    message: '消息内容',
    instructorPhone: null,
    button: [
      { "classWrapper": "bd-bottom bd-right", "image": "../../images/time.png", "text": "课程表", "bindTap": "clickTimeTable" },
      { "classWrapper": "bd-bottom", "image": "../../images/phone.png", "text": "联系教练", "bindTap": "clickContactInstructor" },
      { "classWrapper": "bd-right", "image": "../../images/log.png", "text": "学车记录", "bindTap": "clickBill" },
      { "classWrapper": "", "image": "../../images/caocao-d.png", "text": "理论练习", "bindTap": "clickCaocao" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置全局根域名
    var globalRootDomain = app.globalData.rootDomain;
    this.setData({
      rootDomain: globalRootDomain
    })
    // 设置logo完整src
    var adImageSrc = globalRootDomain + '/images/agan.png';
    this.setData({
      adImage: adImageSrc
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
  
  },

  /**
   * 用户点击练车预约
   */
  clickReservation: function () {
    console.log('用户点击“练车预约”按钮')
    wx.navigateTo({
      url: 'reservation/reservation',
      success: function () { console.log('打开“练车预约”页面成功') },
      fail: function () { console.log('打开“练车预约”页面失败') },
    })
  },

  /**
   * 用户点击时间表
   */
  clickTimeTable: function() {
    console.log('用户点击' + this.data.button[0].text + '按钮')
    wx.navigateTo({
      url: 'timeTable/timetable',
      success: function () {  },
      fail: function () {  }, 
    })
  },

  /**
   * 用户点击联系教练
   */
  clickContactInstructor: function() {
    console.log('用户点击“' + this.data.button[1].text + '”按钮')
    if (true) {
      console.log('用户未预约练车，弹出提示信息'),
        this.setData({ messageTitle: "请预约练车后再联系", message: "不然我不知道该找谁啊" }),
      this.showMessage()
    } else {
      console.log('用户已预约练车，拨打教练电话'),
      wx.makePhoneCall({
        phoneNumber: this.data.instructorPhone
    })}
  },

  /**
   * 用户点学车记录
   */
  clickBill: function () {
    console.log('用户点击“' + this.data.button[2].text + '”按钮')
    wx.navigateTo({
      url: '../me/bill/bill',
      success: function () {  },
      fail: function () {  },
    })
  },

  /**
   * 用户点击曹操专车
   */
  clickCaocao: function () {
    console.log('用户点击“' + this.data.button[3].text + '”按钮，弹出未开放提示'),
      this.setData({ messageTitle: "程序员已被祭天", message: "功能开发中，请耐心等待" }),
    this.showMessage()
  },

  /**
   * 提示消息
   */
  showMessage: function() {
    wx.showModal({
      title: this.data.messageTitle,
      content: this.data.message,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 开发中
   */
  clickNoPage: function() {
    wx.navigateTo({
      url: '../nopage/nopage',
    })
  }
})