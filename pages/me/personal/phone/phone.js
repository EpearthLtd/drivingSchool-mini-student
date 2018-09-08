/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
*/

const app = getApp();
let globalRootDomain = app.globalData.rootDomain;
let globalSourceDomain = app.globalData.sourceDomain;
let globalRequestDomain = app.globalData.requestDomain;
var get_data=[];
var phone_array=[];
var user_data=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userPersonalInfo!=null) {
      this.setData({
        tel: app.globalData.userPersonalInfo.tel
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
    //返回当前页面后重新加载
    this.onLoad()
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
   * 绑定、更换验证手机号
   */
  phoneVerify: function () {
    wx.navigateTo({
      url: '../phoneVerify/phoneVerify',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 解密手机号 
   */
  getPhoneNumber: function (e) {
    console.log(e)
    var _this = this;
    get_data.iv = e.detail.iv;
    get_data.encryptedData = e.detail.encryptedData;
    // console.log(get_data);
    if (e.detail.iv) {
      wx.request({
        url: globalRequestDomain + "/api/GetUser/get_phone",
        data: get_data,
        method: 'POST',
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        success: function (res) {
          var user_phone = 0;
          phone_array = res.data;
          user_phone = phone_array.phoneNumber;
          _this.setData({
            tel: user_phone
          })
          // console.log(phone_array)
          _this.from_data(user_phone);
        },
        fail: function (err) {
          // console.log(err)
        }
      })

      // console.log("成功授权");
      //   }
      // })
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '取消授权!',
        success: function (res) { }
      })
    }
  },

  from_data: function (e) {   //提交数据到获客数据库
    user_data.account = e;
    wx.request({
      url: globalRequestDomain + "/api/GetUser/add_user",
      data: user_data,
      method: 'POST',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: function (res) {
        wx.showModal({
          title: '提交成功！',
          showCancel: false,
          content: '绑定成功!',
          success: function (res) {
          }
        })
        console.log(res.data)
      },
      fail: function (err) {
        // console.log(err)
      }
    })

  },
})