let waterFall=(function(){
  function render($ct){
    let $noteCt =$ct 
        $notes = $noteCt.children()
        $noteWidth = $notes.outerWidth(true)
        colNum = parseInt($(window).width()/ $noteWidth)
        colHeight = []
            for(let i=0;i<colNum;i++){ //初始化列高数组
                colHeight.push(0)
            }
    $notes.each(()=>{
        let minHeight =colHeight[0]  //设置最小，高度，索引
        minIndx =0
        $curEl = $(this)
        for(let i=0;i<colNum;i++){
            if(colHeight[i]<minHeight){
                minHeight = colHeight[i]
                minIndx = i
            }
        }
        $curEl.css({
            left:minIndx* $noteWidth,
            height:minHeight
        })
        colHeight[minIndx] += $curEl.outerHeight(true)//修改最小列高
    })               
  }
  $(window).on('resize',()=>{
      render($ct)
  })
  return {
      init: render
  }
})()
module.exports = waterFall