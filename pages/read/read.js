// pages/read/read.js

var listD = require('../../js/listData.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({    //this = page，对page重新设置数据
      articleData:listD   //对传过来的数据包重新命名
    })
  },

  handleList: function(ev){
    var i = ev.currentTarget.dataset.num;
    wx.navigateTo({   //navigateTo打开新页面的方法
      url: 'read-detail/read-detail?articleId='+i  //新页面打开的地址
    })
  }
})