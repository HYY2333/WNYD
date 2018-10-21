// pages/classify/books/books.js
var AV = require('../../../utils/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   var cid = options.cId;
  //   // console.log(cid);
  //   var _This = this;
  //   var query = new AV.Query('Books');//新建查询对象 表格名称为Books
  //   query.equalTo('classify',cid);//分类为1的数据
  //   query.find().then(function(res){
  //     var len = res.length;//res为表单Books的数据包
  //     var arr = [];//建立空数组，将数据放入
  //     for (var i = 0; i < len; i++) {   //数组有很多条，所以使用for循环
  //       res[i].attributes.objId = res[i].id;  //将当前被遍历到的数据包中的//id存放到其attributes对象下
  //       arr.push(res[i].attributes);//将携带了id的attributes数据包，添加到//arr数组中去
  //     }
  //     _This.setData({  //将过滤后的数据包设置给data对象
  //       bookData:arr
  //     })      
  //   })
  // }

  onLoad: function (options) {
    var cid = options.cId;
    // console.log(cid);
    var _This = this;
    var query = new AV.Query('Books');//新建查询对象 表格名称为Books
    query.equalTo('classify', cid);//分类为1的数据
    query.find().then(function (res) {
      // console.log(res);//res为返回的Books数据包
      var len = res.length;//res为表单Books的数据包
      var arr = [];//建立空数组，将数据放入
      for (var i = 0; i < len; i++) {   //数组有很多条，所以使用for循环
        res[i].attributes.objId = res[i].id;  //将当前被遍历到的数据包中的id存放到其attributes对象下,res[i].id,这个id是表单Books的数据包里该书objectId的名字为id
        arr.push(res[i].attributes);//将携带了id的attributes数据包，添加到//arr数组中去
      }
      _This.setData({  //将过滤后的数据包设置给data对象
        bookData: arr
      })
    })
  },

  handleintro:function(ev){
    var introId = ev.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../book/book?bookId='+introId,
    })
  }
})