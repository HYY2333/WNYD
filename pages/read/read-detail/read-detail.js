// pages/read/read-detail/read-detail.js

var listD = require('../../../js/listData.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   //通过其参数options获取上个页面传递的参数
    var aId = options.articleId;
    this.setData({
        detailD:listD[aId]
    })
  }


})