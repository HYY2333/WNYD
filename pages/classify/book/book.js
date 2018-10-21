// pages/classify/book/book.js
var AV = require('../../../utils/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Show:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bookid = options.bookId;
    // console.log(bookid);
    var _This = this;
    var query = new AV.Query('Books');
    query.equalTo('objectId',bookid);
    query.find().then(function(re){
    // console.log(re);
    var catalog = re[0].attributes.catalog;
    var cata = catalog.split('$');
      _This.setData({
        bookId:re[0].attributes,cata
      })
    })
  }

//   onLoad: function (options) {
//     var bookid = options.bookId;
//     // console.log(bookid);
//     var _This = this;
//     var query = new AV.Query('Books');
// query.equalTo('objectId', '5bcc1d3efb4ffecf3b2306f5');
//     query.find().then(function (re) {
//       // console.log(re);
//       var catalog = re[0].attributes.catalog;
//       var cata = catalog.split('$');
//       _This.setData({
//         bookId: re[0].attributes,cata
//       })
//     })
//   },
})