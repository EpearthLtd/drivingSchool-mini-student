/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
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
    classList: [
      [
        { id: '1', licenceType: 5, subject: 1, startTime: '08:00', endTime: '09:00', duration: '45', flex: '15', students: '2', cardClass: '', checked: '' },
        { id: '2', licenceType: 5, subject: 1, startTime: '09:00', endTime: '10:00', duration: '45', flex: '15', students: '3', cardClass: '', checked: '' },
        { id: '3', licenceType: 5, subject: 1, startTime: '10:00', endTime: '11:00', duration: '45', flex: '15', students: '2', cardClass: '', checked: '' },
        { id: '4', licenceType: 5, subject: 1, startTime: '11:00', endTime: '12:00', duration: '45', flex: '15', students: '0', cardClass: '', checked: 'true' },
        { id: '5', licenceType: 5, subject: 1, startTime: '14:00', endTime: '15:00', duration: '45', flex: '15', students: '3', cardClass: '', checked: '' },
        { id: '6', licenceType: 5, subject: 1, startTime: '15:00', endTime: '16:00', duration: '45', flex: '15', students: '3', cardClass: '', checked: '' },
        { id: '7', licenceType: 5, subject: 1, startTime: '16:00', endTime: '17:00', duration: '45', flex: '15', students: '1', cardClass: '', checked: '' }
      ],
      [
        { id: '8', licenceType: 5, subject: 1, startTime: '08:00', endTime: '09:00', duration: '45', flex: '15', students: '0', cardClass: '', checked: '' },
        { id: '9', licenceType: 5, subject: 1, startTime: '09:00', endTime: '10:00', duration: '45', flex: '15', students: '1', cardClass: '', checked: '' },
        { id: '10', licenceType: 5, subject: 1, startTime: '10:00', endTime: '11:00', duration: '45', flex: '15', students: '3', cardClass: '', checked: '' },
        { id: '11', licenceType: 5, subject: 1, startTime: '11:00', endTime: '12:00', duration: '45', flex: '15', students: '2', cardClass: '', checked: '' },
        { id: '12', licenceType: 5, subject: 1, startTime: '14:00', endTime: '15:00', duration: '45', flex: '15', students: '1', cardClass: '', checked: '' },
        { id: '13', licenceType: 5, subject: 1, startTime: '15:00', endTime: '16:00', duration: '45', flex: '15', students: '3', cardClass: '', checked: '' },
        { id: '14', licenceType: 5, subject: 1, startTime: '16:00', endTime: '17:00', duration: '45', flex: '15', students: '0', cardClass: '', checked: '' }
      ],
      [
        { id: '15', licenceType: 5, subject: 1, startTime: '08:00', endTime: '09:00', duration: '45', flex: '15', students: '0', cardClass: '', checked: '' },
        { id: '16', licenceType: 5, subject: 1, startTime: '09:00', endTime: '10:00', duration: '45', flex: '15', students: '1', cardClass: '', checked: '' },
        { id: '17', licenceType: 5, subject: 1, startTime: '10:00', endTime: '11:00', duration: '45', flex: '15', students: '0', cardClass: '', checked: '' },
        { id: '18', licenceType: 5, subject: 1, startTime: '11:00', endTime: '12:00', duration: '45', flex: '15', students: '0', cardClass: '', checked: '' },
        { id: '19', licenceType: 5, subject: 1, startTime: '14:00', endTime: '15:00', duration: '45', flex: '15', students: '1', cardClass: '', checked: '' },
        { id: '20', licenceType: 5, subject: 1, startTime: '15:00', endTime: '16:00', duration: '45', flex: '15', students: '1', cardClass: '', checked: '' },
        { id: '21', licenceType: 5, subject: 1, startTime: '16:00', endTime: '17:00', duration: '45', flex: '15', students: '0', cardClass: '', checked: '' }
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 页面初始化 options为页面跳转所带来的参数
    // 加载近4天日期
    this.setData({
      dateList: this.getDates(4)
    })
    console.log(this.getDates(4))
    // TODO 加载未来3天的课程
    console.log(this.data.classList)

    // 设置名称
    var day = that.data.classList.length;
    for (var i = 0; i < day; i++) {
      var mClass = that.data.classList[i].length;
      for (var j = 0; j < mClass; j++) {
        var licenceName = 'classList[' + i + '][' + j + '].licenceName'
        switch (that.data.classList[i][j].licenceType) {
          case 0: that.setData({ [licenceName]: 'A1' }); break;
          case 1: that.setData({ [licenceName]: 'A2' }); break;
          case 2: that.setData({ [licenceName]: 'A3' }); break;
          case 3: that.setData({ [licenceName]: 'B1' }); break;
          case 4: that.setData({ [licenceName]: 'B2' }); break;
          case 5: that.setData({ [licenceName]: 'C1' }); break;
          case 6: that.setData({ [licenceName]: 'C2' }); break;
          case 7: that.setData({ [licenceName]: 'C3' }); break;
          case 8: that.setData({ [licenceName]: 'C4' }); break;
          case 9: that.setData({ [licenceName]: 'C5' }); break;
          case 10: that.setData({ [licenceName]: 'D' }); break;
          case 11: that.setData({ [licenceName]: 'E' }); break;
          case 12: that.setData({ [licenceName]: 'F' }); break;
          case 13: that.setData({ [licenceName]: 'M' }); break;
          case 14: that.setData({ [licenceName]: 'N' }); break;
          case 15: that.setData({ [licenceName]: 'P' }); break;
          default: that.setData({ [licenceName]: '驾照类型错误' }); break;
        }
        var subjectName = 'classList[' + i + '][' + j + '].subjectName'
        switch (that.data.classList[i][j].subject) {
          case 0: that.setData({ [subjectName]: '科目一' }); break;
          case 1: that.setData({ [subjectName]: '科目二' }); break;
          case 2: that.setData({ [subjectName]: '科目三' }); break;
          case 3: that.setData({ [subjectName]: '科目四' }); break;
          default: that.setData({ [subjectName]: '训练科目错误' }); break;
        }
      }
    }
    console.log(this.data.classList)
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
  },

  /**
   * 选择课程
   */
  radioChange: function (e) {
    var nowTab = this.data.currentTab
    var nowDate = this.data.dateList[nowTab]

    console.log('radio发生change事件，携带value值为：', e.detail.value)
    console.log('当前日期为' + nowDate.year + '年' + nowDate.month + '月' + nowDate.day + '日')
  }

})