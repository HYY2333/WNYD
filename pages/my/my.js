// pages/my/my.js
var AV = require('../../utils/av-weapp-min.js');
var Books = AV.Object.extend('Books');
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
    
  },
  formSubmit:function(ev){
    // console.log(ev);
    var v = ev.detail.value;
    // console.log(v);
    var book = new Books;
    for(var attr in v){
      book.set(attr,v[attr]);
    }
    book.save().then(function(res){
      // console.log(res);
    })
  }
})