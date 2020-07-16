// miniprogram/pages/funParctice/fun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:[],
    img_url:[],
    content:'',
    hideAdd:0,
    max:200,

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
  chose:function(e){
    let index = e.currentTarget.dataset.id //索引位置
    let options = this.data.options
    options.forEach((item)=>item.chosen=false)
    options[index].chosen = true
    this.setData({
      options: options
    })
  },
  addOption(e){
    let options = this.data.options
    const characters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let character = characters[options.length]
    options.push({value:'',character:character,chosen:false})
    this.setData({
      options: options
    })
  },
  chooseOptionimage(e){
    var that = this;
    let options = this.data.options
    let index = e.currentTarget.dataset.id
    wx.chooseImage({
     count: 1, // 默认9 
     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
     success: function (res) {
      let img = res.tempFilePaths[0]
      options[index].img= img
      that.setData({
        options:options
      })
    }})
  },
  //文本输入
  bindinput(e){
    // console.log(e)
    let index = e.currentTarget.dataset.id //索引位置
    let value = e.detail.value //输入的内容
    let options = this.data.options
    options[index].value = value
    this.setData({
      options: options
    })
  },
    //删除选项
  delOption(e){
    let index = e.currentTarget.dataset.id //索引位置
    let options = this.data.options
    options.splice(index,1)

    this.setData({
      options: options
    })

  },
  input:function(e){
    this.setData({
     content:e.detail.value
    })
  },
  chooseimage:function(){
    var that = this;
    wx.chooseImage({
     count: 9, // 默认9 
     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
     success: function (res) {
     if (res.tempFilePaths.length>0){
      //图如果满了9张，不显示加图
      if (res.tempFilePaths.length == 9){
      that.setData({
       hideAdd:1
      })
      }else{
      that.setData({
       hideAdd: 0
      })
      }
      //把每次选择的图push进数组
      let img_url = that.data.img_url;
      for (let i = 0; i < res.tempFilePaths.length; i++) {
      img_url.push(res.tempFilePaths[i])
      }
      that.setData({
      img_url: img_url
      })
     }
     }
    }) 
  },
  cancelimage:function(e){
    let index = e.currentTarget.dataset.id //索引位置
    let img_url = this.data.img_url;
    img_url.splice(index,1)
    this.setData({
      img_url: img_url
    })
  },
  getValueLength: function (e) {
    let value = e.detail.value
    let len = parseInt(value.length)
    //最多字数限制
    if (len > 200) return;
    this.setData({
      currentWordNumber: len //当前字数 
    })
  },

})