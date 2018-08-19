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
    coachInfo: {
      id: "00280021003",
      name: "教练姓名",
      gender: 0,
      tel: "02867875667",
      licencePlate: "川AS110学",
      avatarSrc: "http://test.epearth.com/images/avatar.jpg",
      students: 0,
    },
    currentCoach: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // TODO 通过编号加载教练信息
    var thatCoachId
    if (options.coachId) {
      thatCoachId = options.coachId
    }
    wx.request({
      url: 'http://test.epearth.com',
      data: { coachId: thatCoachId },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function (res) { 
        console.log(res)
        console.log(res.data)
        if (res.data!=null) {
          this.setData({
            coachInfo: res.data
          })
        }
       },
    })

    // 判断是否为当前教练
    if (this.data.coachInfo.id == app.globalData.userPersonalInfo.coachId) {
      this.setData ({
        currentCoach: true,
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
   * 设置教练信息
   */
  setCoachInfo: function(res) {
    if (res != null) {
      this.setData({
        coachInfo: res
      })
    }
  },

  /**
   * 选择教练
   */
  chooseCoach: function() {
    
  },

  /**
   * 给教练打电话
   */
  callCoach: function () {
    console.log('用户拨打教练' + this.data.coachInfo.name + '的电话' + this.data.coachInfo.tel)
    wx.makePhoneCall({
      phoneNumber: this.data.coachInfo.tel,
      success(res) {
        console.log('用户拨打电话成功')
      },
      fail(res) {
        console.log('用户取消了拨打')
      }
    })
  }
})