/*
   debug 日记 $noteCt,$ct 目前还有问题12.5                                         

*/ 
var waterFall = (function(){
    var $noteCt
    var $notes
  function render(ct){
    $noteCt = ct
    $notes = $noteCt.children()
    var $noteWidth = $notes.outerWidth(true),
        colNum = parseInt($(window).width()/ $noteWidth),
        colHeight = []
            for(let i=0;i<colNum;i++){ //初始化列高数组
                colHeight.push(0)
            }
    $notes.each(function(){
        let minHeight =colHeight[0] , //设置最小，高度，索引
            minIndx =0,
        $curEl = $(this)
        for(let i=0;i<colNum;i++){
            if(colHeight[i]<minHeight){
                minHeight = colHeight[i]
                minIndx = i
            }
        }
        $curEl.css({
            left:minIndx* $noteWidth,
            top:minHeight
        })
        colHeight[minIndx] += $curEl.outerHeight(true)//修改最小列高
    })               
  }
  $(window).on('resize',function(){
    render($noteCt)
  })
  return {
    init: render
  }
})()
module.exports = waterFall