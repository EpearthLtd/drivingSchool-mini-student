/**
 * 版权所有(C)2018 成都曦璞科技有限公司
 * 
 * 文件名file：pages/training/reservation/reservation.js
 * 描述description：学车微信小程序学员端-练车预约页处理逻辑
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
 */

var app = getApp()

// 导入js  
var util = require('../../../utils/util.js'); 

Page({
  data: {
    currentTab: 1,
    dateList: [],
    timeTable: [
      { startTime: '08:00', endTime: '09:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', students: '0', disabled: false, cardClass: '' },
      { startTime: '09:00', endTime: '10:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', students: '1', disabled: false, cardClass: '' },
      { startTime: '10:00', endTime: '11:00', duration: '45', flex: '15', situation: '已约满', situationClass: 'color-gray', students: '3', disabled: true, cardClass: '' },
      { startTime: '11:00', endTime: '12:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', students: '2', disabled: false, cardClass: '' },
      { startTime: '14:00', endTime: '15:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', students: '1', disabled: false, cardClass: '' },
      { startTime: '15:00', endTime: '16:00', duration: '45', flex: '15', situation: '已约满', situationClass: 'color-gray', students: '3', disabled: true, cardClass: '' },
      { startTime: '16:00', endTime: '17:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', students: '0', disabled: false, cardClass: '' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 加载近4天日期
    let dateArray = this.getDates(4);
    this.setData({
      dateList: this.getDates(4)
    })
    console.log(this.getDates(4))
  },

  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      console.log('点击标签' + e.target.dataset.current)
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 获取d当前时间多少天后的日期和对应星期
   * //todate默认参数是当前日期，可以传入对应时间
   */
  getDates: function (days, todate = this.getCurrentMonthFirst()) {
    var dateArry = [];
    for (var i = 0; i < days; i++) {
      var dateObj = util.dateLater(todate, i);
      dateArry.push(dateObj)
    }
    return dateArry;
  },

  //获取当前时间
  getCurrentMonthFirst: function () {
    var date = new Date();
    var todate = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
    return todate;
  }

})