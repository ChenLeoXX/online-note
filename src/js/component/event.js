var event = (function(){
    let eventPool = {}
    function on(topic,handler){
      eventPool[topic] = eventPool[topic] || []
      eventPool[topic].push({
        handler:handler
      })
    }
    function trigger(topic,args){
      if(!eventPool[topic]) {
        return
      }
      for(let i=0;i<eventPool[topic].length;i++){
        eventPool[topic][i].handler(args)
      }
    }
    function off(topic,handler){
      eventPool[topic].forEach((it,inx)=>{
       if(it.handler === handler){
        eventPool[topic].splice(inx,1)
       }
      })
    }
    return {
      on:on,
      off:off,
      trigger:trigger
    }
  })()
module.exports = event