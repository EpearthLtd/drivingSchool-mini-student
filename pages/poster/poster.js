/**
 * 版权所有(C)2018 成都曦璞科技有限公司
 * 
 * 文件名file：pages/poster/poster.js
 * 描述description：学车微信小程序学员端-报名海报页js
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
 */

Page({

  /**
   * 页面的初始数据
   */
  data: {
    carousels:[
      { url: 'https://aganxueche.com/testimg/ad1.jpg', bindtap: 'clickAd1' },
      { url: 'https://aganxueche.com/testimg/ad2.jpg', bindtap: 'clickAd2' },
      { url: 'https://aganxueche.com/testimg/ad3.jpg', bindtap: '' }
    ],
    priceView:[
      { image: '../../images/car.png', name: '手动档', price: '2680', descriptionL1: '尊享学车优惠　体检考试接送', descriptionL2: '全程售后服务'},
      { image: '../../images/car.png', name: '自动档', price: '3399', descriptionL1: '尊享学车优惠　体检考试接送', descriptionL2: '全程售后服务' },
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
   * 用户点击广告页1
   */
  clickAd1: function () {
    console.log('用户点击广告图片1')
    wx.navigateTo({
      url: '../ad/ad1/ad1',
    })
  },

  /**
   * 用户点击广告页2
   */
  clickAd2: function () {
    console.log('用户点击广告图片2')
    wx.navigateTo({
      url: '../ad/ad2/ad2',
    })
  },

  clickC: function () {
    wx.navigateTo({
      url: '../nopage/nopage',
    })
  },

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
