/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
*/

App({
  onLaunch: function () {
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
      success: function(res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          // 发起网络请求
          /*wx.request({
            url: 'https://aganxueche.com/userinfo/wx/login',
            method: 'POST',

          })*/
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

  },
  globalData: {
    rootDomain: 'https://aganxueche.com',
    userInfo: null, // 微信返回的用户信息
    userPersonalInfo: {
      "name": "郑维一",
      "idNumber":"510111111111111111",
      "school": "四川大学锦城学院",
      "phone": "13568810905",
      "userStatus": 3,
      "progress": "0"
    },
    dateList: []
  }
})