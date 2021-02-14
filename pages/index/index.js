import {request} from "../../request/request"
Page({
  data: {
    swiperList:[],
    cateList:[],
    recommendList:[]
  },
  // 页面加载完调用
  onLoad: function(options) {
    // es6 promise
    this.getSwiperList();
    this.getCateList();
    // wx.request({
    //   url: 'http://localhost:3000/banner',
    //   success:(result)=>{
    //     console.log(result);
    //     this.setData({
    //       swiperList:result.data.banners
    //     })
    //   }
    // })
    this.getRecommendList();
  },
  // 获取轮播图数据
  getSwiperList(){
    request({url:"http://localhost:3000/banner"})
    .then(result=>{
      this.setData({
        swiperList:result.data.banners
      })
    })
  },
  // 获取分类导航列表
   getCateList(){
    request({url:"http://localhost:3000/homepage/dragon/ball"})
    .then(result=>{
      this.setData({
        cateList:result.data.data
      })
    })
   },
  //  获取网友列表数据
  getRecommendList(){
    request({url:"http://localhost:3000/top/playlist"})
    .then(result=>{
      this.setData({
        recommendList:result.data.playlists
      })
    })
  }
});
  