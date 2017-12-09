require('less/index.less')
const waterFall = require('../component/waterfall.js')
var NoteControl = require('../component/note-control.js').noteControl
var event = require('../component/event.js')
NoteControl.load()
$('.new-note').on('click', function() {
  NoteControl.add()
})
event.on('waterfall', function(){
  waterFall.init($('#content'))
})
