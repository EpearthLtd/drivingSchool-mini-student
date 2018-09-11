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
    // 设置全局根域名
    this.setData({
      rootDomain: globalRootDomain,
      sourceDomain: globalSourceDomain,
      requestDomain: globalRequestDomain
    })
    var that = this;
/*
    wx.login({
      success: function (res) {
        if (res.code) {
          get_data.code = res.code;
          wx.request({
            url: globalRequestDomain + "/api/GetUser/getopenid",
            data: get_data,
            method: 'POST',
            header: { "Content-Type": "application/x-www-form-urlencoded" },
            success: function (res) {
              var _data = res.data;
              get_data.session_key = _data.data.session_key;
              get_data.openid = _data.data.openid;
              user_data.openid = _data.data.openid;

              wx.request({
                url: "https://api.eexueche.com/api/GetUser/get_one_user",
                data: get_data,
                method: 'POST',
                header: { "Content-Type": "application/x-www-form-urlencoded" },
                success: function (res) {
                  that.setData({
                    tel: res.data.userinfo.tel
                  })
                },
                fail: function (err) {
                  // console.log(err)
                }
              })
            },
            fail: function (err) {
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });

    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        user_data.nickName = userInfo.nickName
        user_data.avatarUrl = userInfo.avatarUrl

        get_data.iv = res.iv;
        get_data.encryptedData = res.encryptedData;
        wx.request({
          url: "https://api.eexueche.com/api/GetUser/get_one_user",
          data: get_data,
          method: 'POST',
          header: { "Content-Type": "application/x-www-form-urlencoded" },
          success: function (res) {
          },
          fail: function (err) {
            // console.log(err)
          }
        })
        // console.log(user_data);
        // var gender = userInfo.gender //性别 0：未知、1：男、2：女
        // var province = userInfo.province
        // var city = userInfo.city
        // var country = userInfo.country
      }
    })
    */
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
    console.log('打印传入数据')
    console.log(e)
    var _this = this;
    get_data.iv = e.detail.iv;
    get_data.encryptedData = e.detail.encryptedData;
    get_data.session_key = app.globalData.wechatUserData.session
    console.log(get_data);
    if (e.detail.iv) {
      wx.request({
        url: globalRequestDomain + "/api/GetUser/get_phone",// get_phone get_unionid
        data: get_data,
        method: 'POST',
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        success: function (res) {
          console.log('调用成功打印返回数据')
          console.log(res)
          var user_phone = 0;
          phone_array = res.data;
          user_phone = phone_array.phoneNumber;
          _this.setData({
            tel: user_phone
          })
          app.globalData.userPersonalInfo.tel = user_phone
          console.log(phone_array)
          _this.from_data(user_phone);
        },
        fail: function (err) {
        console.log(err)
        }
      })

      console.log("成功授权");
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