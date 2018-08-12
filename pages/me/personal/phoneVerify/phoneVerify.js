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
    showTopTips: false,
    errMsg: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
   * 用户点击确定，检验验证码是否正确
   */
  clickNext: function(e) {
    
    if (this.phoneVerify(e.detail.value.newTel)) {
      this.phoneSet(e.detail.value.newTel)
    }
    
  },

  /**
   * 校验手机号
   */
  phoneVerify: function(phone) {
    if (phone.length == 0) {
      //输入值为空
      this.setData({
        showTopTips: true,
        errMsg: '别闹，请先输入手机号',
      })
      return false;
    }
    if (phone.length != 11) {
      //输入长度不足11位
      this.setData({
        showTopTips: true,
        errMsg: '手机号是11位，请检查是不是按漏了',
      })
      return false;
    }
    if (phone == app.globalData.userPersonalInfo.tel) {
      //输入手机号为当前手机号
      this.setData({
        showTopTips: true,
        errMsg: '别皮，这就是你现在绑定的手机号',
      })
      return false;
    }
    this.setData({
      showTopTips: false,
      errMsg: null,
    })
    return true;
  },

  /**
   * 设置手机号
   */
  phoneSet: function(tel) {
    if (tel != null) {
      wx.showLoading({
        // 访问网络等待提示
        title: '请稍后',
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
      // 修改本地全局数据
      app.globalData.userPersonalInfo.tel = tel;
      // 访问网络完成，隐藏提示
      wx.hideLoading();
      wx.showToast({
      // 提示手机绑定成功
        title: '手机绑定成功',
        icon: 'success',
        duration: 1500,
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) {
          // 延时函数
          setTimeout(function () {
            // 跳转回前一页面
            wx.navigateBack({
              delta: 1,
            })
          }, 1500)
        },
      })
    }
  }
})