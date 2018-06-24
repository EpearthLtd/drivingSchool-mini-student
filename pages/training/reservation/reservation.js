/**
 * 版权所有(C)2018 成都曦璞科技有限公司
 * 
 * 文件名file：pages/training/reservation/reservation.js
 * 描述description：学车微信小程序学员端-练车预约页处理逻辑
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
 */

// 导入js  
var util = require('../../../utils/util.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    dateEnd: '',
    array: ['教练甲', '教练乙', '教练丙', '教练丁'],
    timeTable: [
      { startTime: '08:00', endTime: '09:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', disabled: false, cardClass: '' },
      { startTime: '09:00', endTime: '10:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', disabled: false, cardClass: '' },
      { startTime: '10:00', endTime: '11:00', duration: '45', flex: '15', situation: '已被预约', situationClass: 'color-gray', disabled: true, cardClass: '' },
      { startTime: '11:00', endTime: '12:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', disabled: false, cardClass: '' },
      { startTime: '14:00', endTime: '15:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', disabled: false, cardClass: '' },
      { startTime: '15:00', endTime: '16:00', duration: '45', flex: '15', situation: '已被预约', situationClass: 'color-gray', disabled: true, cardClass: '' },
      { startTime: '16:00', endTime: '17:00', duration: '45', flex: '15', situation: '可预约', situationClass: 'color-pass', disabled: false, cardClass: '' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var that = this;
    var date = util.formatDate(new Date());
    var dateEnd = util.formatEndDate(new Date());
    /* 设置
    var timeTable = this.data.timeTable.lenth;
    for(var i=0; i++; i<=timeTable) {
      var tomeTable = "timeTable[" + i + "]";
      var disabled = timeTable + ".disabled";
      var situation = timeTable + ".situation";
      var disabledValue = that.data.timeTable[i].disabled;
      if (disabledValue == true) {
        this.setData({
          situation: "测试已被预约"
        })}
    };
    */
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      date: date,
      dateEnd: dateEnd
    });
    
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
   * 教练选择
   */
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 日期变化事件
   */
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
})