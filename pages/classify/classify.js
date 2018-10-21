// pages/classify/classify.js
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
    var _This = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bcaa578e6742c1bf8220ca0/',
      method:'get',
      success:function(res){
        var c = res.data.cData;
        // console.log(c);
        _This.setData({
          classify:c
        })
      }
    })
  },

  handlebook:function(ev){
    var i = ev.currentTarget.dataset.id + 1;
    // console.log(i);
    wx.navigateTo({
      url: 'books/books?cId='+i,
    })
  }  
})