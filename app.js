/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
 */

// 定义小程序全局根域名
let rootDomain = 'https://www.aganxueche.com';
let sourceDomain = 'https://agan.src.epearth.com';
let requestDomain = 'https://api.eexueche.com';
// 定义
var get_data = [];
var user_data = [];

App({
  onLaunch: function () {
    var that = this

    // 设置全局根域名
    this.globalData.rootDomain = rootDomain
    this.globalData.sourceDomain = sourceDomain
    this.globalData.requestDomain = requestDomain
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取当前
    var date = new Date();
    var dateArray = [];
    for (var i = 0; i < 4; i++) {
      var mDate = (date.getMonth() + 1) + '月' + (date.getDate() + i) + '日';
      dateArray.push(mDate);
    }
    this.globalData.dateList = dateArray;
    console.log('全局数组dateArray为：' + this.globalData.dateList);

    // 登录
    wx.login({
      success: function (res) {
        // 打印获取到的微信用户数据
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          get_data.code = res.code;

          // 获取用户信息
          wx.getSetting({
            success: res => {
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                wx.getUserInfo({
                  success: res => {
                    // 将 userInfo 存入全局变量
                    that.globalData.userInfo = res.userInfo
                    // 将 res 发送给后台解码出 unionId
                    get_data.encryptedData = res.encryptedData
                    get_data.iv = res.iv
                    console.log('获取微信账户信息：')
                    console.log(res)
                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // 所以此处加入 callback 以防止这种情况
                    if (that.userInfoReadyCallback) {
                      that.userInfoReadyCallback(res)
                    }
                    
                    // 发起网络请求获取 unionId、用户信息
                    console.log('提交以下信息到服务器获取unionID等：')
                    console.log(get_data)
                    wx.request({
                      url: requestDomain + '/api/GetUser/get_unionid',// getopenid get_unionid
                      method: 'POST',
                      data: get_data,
                      header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                      },
                      success: function (res) {
                        console.log("获取到的用户信息为：")
                        console.log(res)
                        // 把 openid, sessionKey 存入全局变量
                        //that.globalData.wechatSystemData.session = res.data.data.session_key
                        that.globalData.wechatSystemData.openid = res.data.openId;
                        user_data.openid = res.data.openId;
                        if (res.data.unionId) {
                          that.globalData.wechatSystemData.unionid = res.data.unionId;
                          user_data.unionid = res.data.unionId;
                        }
                        // 要提交服务器的参数
                        console.log("要提交服务器的参数：")
                        console.log(user_data)

                        // 提交 openId,unionId 到数据库获取用户信息
                        wx.request({
                          url: requestDomain + "/api/GetUser/get_one_user",
                          data: user_data,
                          method: 'POST',
                          header: { "Content-Type": "application/x-www-form-urlencoded" },
                          success: function (res) {
                            console.log("使用 openid,unionid 获取到的用户信息")
                            console.log(res);
                            var userinfo = res.data.userinfo;
                            if (userinfo) {
                              this.globalData.personalInfo = userinfo
                            }
                            // console.log(res.data.userinfo)
                          },
                          fail: function (err) {
                            console.log(err)
                          }
                        })  // 获取用户信息结束
                      },
                      fail: function (err) { }
                    })
                  }
                })
              }
            }
          })
        } else {
          console.error('获取用户登录态失败！' + res.errMsg)
        }
      }
    });

    /*// 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              that.globalData.userInfo = res.userInfo
              get_data.encryptedData = res.encryptedData
              get_data.iv = res.iv
              console.log('获取微信账户信息：')
              console.log(res)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })*/

    
    

    /**
     * 获取教练信息
     */
    if (this.globalData.userPersonalInfo != undefined && this.globalData.userPersonalInfo.coachId != null) {
      // 获取教练信息
      var id = this.globalData.userPersonalInfo.coachId;
      /*wx.request({
        url: '',
      })*/
      var coachInfo = {
        "id": "00280021003",
        "name": "王三",
        "gender": 0,
        "tel": "13500000000",
        "licencePlate": "川AS110学",
        "avatarSrc": "https://develop.epearth.com/images/avatar.jpg",
        "students": 0
      }
      this.globalData.coachInfo = coachInfo
    }
    // console.log(this.globalData.coachInfo)
  },

  globalData: {
    /*rootDomain: 'https://www.eexueche.com',
    sourceDomain: 'https://www.eexueche.com',
    requestDomain: 'https://api.eexueche.com',*/
    appName: '{APP名称}',
    car_status: ['未报名', '科目一', '科目二', '科目三', '科目四', '已毕业'],
    car_type: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'c1', 'c2', 'c3', 'D', 'E', 'F', 'M', 'N', 'P'],
    userInfo: null, // 微信返回的用户信息
    wechatSystemData: {},
    userPersonalInfo: {
      /*"uid": "1",
      "type": [0, 0, 0, 1],
      "name": "{郑维一}",
      "idNumber": "{510111111111111111}",
      "tel": "13500000000",
      "userStatus": 1, //默认为0
      "siteId": "123", //userStatus大于0时返回该属性
      "siteName": "{训练场名称}", //userStatus大于0时返回该属性
      "schoolName": "{四川大学锦城学院}", //userStatus大于0时返回该属性
      "licenceType": 5, //userStatus大于0时返回该属性
      "progress": 0, //userStatus大于0时返回该属性
      "coachId": "00280021002", //userStatus大于0时返回该属性*/
    },
    coachInfo: null,
    dateList: []
  },
})