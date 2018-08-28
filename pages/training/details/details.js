/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
*/

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    trainingInfo: { id: '19', siteName: 'CN训练场', licenceType: 5, subject: 1, date: '2018-08-21', startTime: '14:00', endTime: '15:00', duration: '45', flex: '15', students: 1, trainingStatus: 3, add: 'XX街XX号', coachName: '王教练', licencePlate: '川AV110学', coachTel: '13000000000' }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    // 设置全局根域名
    var globalRootDomain = app.globalData.rootDomain;
    var globalSourceDomain = app.globalData.sourceDomain;
    this.setData({
      rootDomain: globalRootDomain,
      sourceDomain: globalSourceDomain,
    })

    // TODO 通过传入id获取训练详情
    if (options.id != null) {
      var thatId = options.id
    }
    wx.request({
      url: globalRootDomain,
      data: { id: thatId },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) {
        console.log(res)
        /**
         * TODO 实现接口调用
         
        if (res.statusCode<400) {
          that.setData({
            coachInfo: res.data
          })
        }*/
      },
    })

    // 设置名称
    var licenceName = 'trainingInfo.licenceName'
    switch (that.data.trainingInfo.licenceType) {
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
        default: that.setData({ [licenceName]: '驾照类型异常' }); break;
      }
    var subjectName = 'trainingInfo.subjectName'
    switch (that.data.trainingInfo.subject) {
        case 0: that.setData({ [subjectName]: '科目一' }); break;
        case 1: that.setData({ [subjectName]: '科目二' }); break;
        case 2: that.setData({ [subjectName]: '科目三' }); break;
        case 3: that.setData({ [subjectName]: '科目四' }); break;
        default: that.setData({ [subjectName]: '训练科目异常' }); break;
      }
    var trainingStatuestName = 'trainingInfo.traininStatustName'
    switch (that.data.trainingInfo.trainingStatus) {
        case 0: that.setData({ [trainingStatuestName]: '预约成功' }); break;
        case 1: that.setData({ [trainingStatuestName]: '已取消' }); break;
        case 2: that.setData({ [trainingStatuestName]: '已完成' }); break;
        case 3: that.setData({ [trainingStatuestName]: '缺勤' }); break;
        default: that.setData({ [trainingStatuestName]: '训练状态异常' }); break;
      }
    var trainingStatuestColor = 'trainingInfo.traininStatustColor'
    switch (that.data.trainingInfo.trainingStatus) {
        case 0: that.setData({ [trainingStatuestColor]: 'pass' }); break;
        case 1: that.setData({ [trainingStatuestColor]: 'gray' }); break;
        case 2: that.setData({ [trainingStatuestColor]: 'gray' }); break;
        case 3: that.setData({ [trainingStatuestColor]: 'worry' }); break;
        default: that.setData({ [trainingStatuestColor]: 'pass' }); break;
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
  
  }
})