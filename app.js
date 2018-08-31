/*!
 * 学车管理平台微信小程序学员端 (https://github.com/EpearthLtd/drivingSchool-mini-student)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
*/

App({
  onLaunch: function () {
    wx.showModal({
      title: '体验须知',
      content: '当前版本仅用于静态体验，预置了部分虚构的个人信息，如有雷同纯属巧合。\n\n千万不要真的拨打投诉电话以外的任何电话，不然程序员维一是真的真的会被拿去祭天的！',
      confirmText: '同意',
      showCancel: false,
      cancelText: '不同意',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击同意')
        } else if (res.cancel) {
          console.log('用户点击不同意')
        }
      }
    })

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
              console.log(this.globalData.userInfo)

              /**
               * 临时代码：设置学员姓名为微信昵称
               */
              this.globalData.userPersonalInfo.name = "{ " + res.userInfo.nickName + " 的真实姓名}"

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

    /**
     * 获取教练信息
     */
    if (this.globalData.userPersonalInfo.coachId!=null) {
      // 获取教练信息
      var id = this.globalData.userPersonalInfo.coachId;
      /*wx.request({
        url: '',
      })*/
      var coachInfo = {
        "id": "00280021003",
        "name": "{王三}",
        "gender": 0,
        "tel": "13500000000",
        "licencePlate": "川AS110学",
        "avatarSrc": "https://agan.src.epearth.com/images/avatar.jpg",
        "students": 0
      }
      this.globalData.coachInfo = coachInfo
    }
    console.log(this.globalData.coachInfo)
    console.log(this.globalData.userInfo)
  },

  globalData: {
    rootDomain: 'https://agan.request.epearth.com',
    sourceDomain: 'https://agan.src.epearth.com',
    appName: '阿甘学车',
    userInfo: null, // 微信返回的用户信息
    userPersonalInfo: {
      "uid": "1",
      "type": [0,0,0,1],
      "name": "{姓名}",
      "idNumber":"{510111111111111111}",
      "tel": "13500000000",
      "userStatus": 1,            //默认为0
      "siteId": "123",            //userStatus大于0时返回该属性
      "siteName": "{训练场名称}",  //userStatus大于0时返回该属性
      "schoolName": "{四川大学锦城学院}",//userStatus大于0时返回该属性
      "licenceType": 5,           //userStatus大于0时返回该属性
      "progress": 0,              //userStatus大于0时返回该属性
      "coachId": "00280021002",   //userStatus大于0时返回该属性
    },
    coachInfo: null,
    dateList: []
  },
})