import request from "../../request/request";
Page({
  data: {
    phone: '',
    password: ''
  },
  //options(Object)
  onLoad: function (options) {

  },
  // 获取输入框输入值
  handleInput(event) {
    // let id = event.currentTarget.id;
    let id = event.currentTarget.dataset.type;
    let value = event.detail.value;
    console.log(event);
    console.log(id, value);
    this.setData({
      [id]: value
    })
  },
  login() {
    let {phone,password} = this.data;
    if (!phone) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
    } else if (!password) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
    } else {
      wx.switchTab({
        url: '../index/index',
        success: () => {
          wx.showToast({
            content: '成功',
            type: 'success',
            duration: 4000
          });
        }
      })
    }
    // let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    // if(){

    // }
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});