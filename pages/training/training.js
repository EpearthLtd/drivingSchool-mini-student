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
    adImage: 'https://aganxueche.com/images/agan.png',
    messageTitle: '提示',
    message: '消息内容',
    instructorPhone: null,
    "button": [
      { "classWrapper": "bd-bottom bd-right", "image": "../../images/time.png", "text": "时间表", "bindTap": "clickTimeTable" },
      { "classWrapper": "bd-bottom", "image": "../../images/phone.png", "text": "联系教练", "bindTap": "clickContactInstructor" },
      { "classWrapper": "bd-right", "image": "../../images/log.png", "text": "学车记录", "bindTap": "clickBill" },
      { "classWrapper": "color-gray", "image": "../../images/caocao-d.png", "text": "曹操专车", "bindTap": "clickCaocao" }
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
    console.log('用户点击“时间表”按钮')
    wx.navigateTo({
      url: 'timeTable/timetable',
      success: function () { console.log('打开“时间表”页面成功') },
      fail: function () { console.log('打开“时间表”页面失败') }, 
    })
  },

  /**
   * 用户点击联系教练
   */
  clickContactInstructor: function() {
    console.log('用户点击“联系教练”按钮')
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
    console.log('用户点击“学车记录”按钮')
    wx.navigateTo({
      url: '../me/bill/bill',
      success: function () { console.log('打开“学车记录”页面成功') },
      fail: function () { console.log('打开“学车记录”页面失败') },
    })
  },

  /**
   * 用户点击曹操专车
   */
  clickCaocao: function () {
    console.log('用户点击“曹操专车”按钮，弹出未开放提示'),
      this.setData({ messageTitle: "曹操打仗去了", message: "功能开发中，请耐心等待" }),
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