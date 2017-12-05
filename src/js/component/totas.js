require('less/totas.less')
function totas(msg,time){
  this.msg=msg
  this.time = time || 1000 //ms
  this.createTotas()
  this.showTotas() //原型上创建两个方法控制创建，消失功能
}
totas.prototype = {
  createTotas:function(){
    let tpl= '<div class="totas">'+ this.msg+'</div>' //元素模板
    $('body').append(tpl)//插入元素
 },
 showTotas:function(){
   var _this= this //声明外部的this指向， 防止setTimeout内部发生变化
   var $totas = $('.totas')
   $totas.fadeIn(500,function(){  
     setTimeout(function(){
    $totas.fadeOut(500,function(){
      $totas.remove()      
      })
    },_this.time)
  })
}
}
function Totas(msg,time){
 return new totas(msg,time)
}
module.exports.totas= Totas
