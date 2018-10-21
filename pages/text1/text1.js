// pages/text1/text1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello world",
    arr:[
      {name:"张三丰",age:"100"},
      { name: "张三丰1", age: "101" },
      { name: "张三丰2", age: "102" },
      { name: "张三丰3", age: "103" },
      { name: "张三丰4", age: "104" },
      { name: "张三丰5", age: "105" },
      { name: "张三丰6", age: "106" }
    ],
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleDel:function(ev){
    var n = ev.currentTarget.dataset.num;
    var Arr = this.data.arr;
    Arr.splice(n,1);
    this.setData({
      arr:Arr
    })
  },

  handleShow:function(){
    var show = this.data.show;
    this.setData({
      show:!show
    })
  }


})