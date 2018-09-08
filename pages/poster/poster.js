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
    carousels:[
      { src: '/images/ad1.jpg', url: '/miniprogram/ad1.html' },
      { src: '/images/ad2.jpg', url: '/miniprogram/ad2.html' },
      { src: '/images/ad3.jpg', url: '' }
    ],
    priceView:[
      { src: '../../images/car.svg', name: '手动档', price: '3000', descriptionL1: '杜绝吃拿卡要　不满极速退款', descriptionL2: '尊享全程售后　线下消费折扣', bindtap: 'clickManual' },
      { src: '../../images/car.svg', name: '自动档', price: '4000', descriptionL1: '杜绝吃拿卡要　不满极速退款', descriptionL2: '尊享全程售后　线下消费折扣', bindtap: 'clickAutomatic' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置全局根域名
    var globalRootDomain = app.globalData.rootDomain;
    var globalSourceDomain = app.globalData.sourceDomain;
    this.setData({
      rootDomain: globalRootDomain,
      sourceDomain: globalSourceDomain,
    })
    // 设置页面标题
    var globalAppName = app.globalData.appName;
    wx.setNavigationBarTitle({
      title: globalAppName,
    })
    // 修改图片完整src
    var imgLength = this.data.carousels.length;
    console.log('共有' + imgLength + '张图片')
    for (var i = 0; i < imgLength; i++ ) {
      var src = globalSourceDomain + this.data.carousels[i].src;
      console.log('完整图片src为：' + src)
      var srcName = 'carousels[' + i + '].src';
      this.setData({
        [srcName]: src
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
 * 免费试学
 */
  freeTrail: function() {
    wx.navigateTo({
      url: 'freeTrail/freeTrail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

/**
 * 用户点击手动档、自动档
 */
  clickManual: function () {
    console.log('用户点击手动档')
    wx.navigateTo({
      url: 'manual/manual',
    })
  },
  clickAutomatic: function () {
    console.log('用户点击自动档')
    wx.navigateTo({
      url: 'automatic/automatic',
    })
  },

/**
 * 服务承诺、学车流程、报名须知、常见问题4个页面按钮
 */
  clickPromise: function () {
    wx.navigateTo({
      url: '../poster/promise/promise',
    })
  },
  clickProcess: function () {
    wx.navigateTo({
      url: '../poster/process/process',
    })
  },
  clickNotice: function () {
    wx.navigateTo({
      url: '../poster/notice/notice',
    })
  },
  clickQuestion: function () {
    wx.navigateTo({
      url: '../poster/question/question',
    })
  },
})
