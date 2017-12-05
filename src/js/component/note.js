require('less/note.less')
const event = require('./evnet.js')
const totas = require('./totas.js').totas

function Note(opts) {
    this.initOpts(opts)
    this.create()
    this.setStyle()
    this.bindEvent()
}
Note.prototype = {
    colorPool: [ //随机贴纸16进制颜色
        '#ffaa4f', '#ef69b3',
        '#9f9be8', '#f7bec9',
        '#97daae', '#9bd1e0'
    ],
    defaultOpts: {
        id: '',
        $ct: $('#content').length > 0 ? $('#content') : $('body'), // 默认容器
        text: '输入内容...'
    },
    initOpts: function () {
        this.opts = $.extend({}, this.defaultOpts, opts || {}) //复制一个选项参数，如果没有opts参数，默认为default
        if (this.opts.id) {
            this.id = this.opts.id
        }
    },
    create: function () {
        //字符串模板
        let tpl = `<div class=".note"> 
     <div class="tuding" contenteditable=false></div>
     <div class="close" contenteditable=false>X</div>
     <div class="content" contenteditable=true></div>
</div>`
        this.$note = tpl
        $noteCt = $note.find('.content')
        $noteCt.html(this.defaultOpts.text)
        this.opts.$ct.append(this.$note)
        if (!this.id) {
            this.$note.css({
                bottom: '10px'
            })
        } //新增无id贴纸，放到底部
    },
    setStyle: function () {
        let color = this.colorPool[Math.floor(Math.random() * 6)]
        this.$note.css({
            background: color
        })
    },
    layout: function () {
        let self = this
        if (slef.clk) {
            clearTimeout(self.clk)
        }
        self.clk = setTimeout(() => {
            event.trigger('waterfall')
        }, 100);
    },
    bindEvent: function () {
        var self = this,
            $note = this.$note
        $delte = $note.find('.close')
        $noteHead = $note.find('.tuding')
        $noteCt = $note.find('.content')
        $noteHead.on('click', function () {
            self.dlete()
        })
        $noteCt.on('focus', function () { //绑定事件，模拟input的change事件 $.data()方法设置属性，存储 note的文本内容
            if ($noteCt.html() === '请输入内容...') {
                $noteCt.html('')
            }
            $noteCt.data('before'.$noteCt.html())
        }).on('blur pasete', function () {
            if ($noteCt.data('before') != $noteCt.html()) {
                $noteCt.data('before', $noteCt.html())
                self.layout()
                if (self.id) {
                    self.eidt($noteCt.html())
                } else {
                    self.add($noteCt.html())
                }
            }
        })
        //贴纸移动
        $noteHead.on('mousedown', function (e) {
            var targetX = e.pageX - $note.offset().left, //记录鼠标在元素内点击位置到，body文档最左侧距离
                targetY = e.pageY - $note.offset().top       //记录鼠标在元素内点击位置到，body文档最上侧距离
            $note.addClass('draggable').data('targetPos', {
                x: targetX,
                y: targetY
            })
        }).on('mouseup', function (e) {
            $note.removeClass('draggable').removeData('pos')
        })
        $('body').on('mousemove',function(e){
            $('.draggable').length && $('.draggable').offset({
                left:e.pageX - $('.draggable').data('targetPos').x, // note X轴偏移位置， 当前鼠标在body内位置 - （图钉触发鼠标点击位置 - note自身到body左侧位置）
                top: e.pageY - $('.draggable').data('targetPos').y
            })
        })
    },
    edit: function (msg) {
        var self = this;
        $.post('/api/notes/edit',{
            id: this.id,
            note: msg
          }).done(function(ret){
          if(ret.status === 0){
            toast('update success');
          }else{
            toast(ret.errorMsg);
          }
        })
      },
    
      add: function (msg){
        var self = this;
        $.post('/api/notes/add', {note: msg})
          .done(function(ret){
            if(ret.status === 0){
              toast('add success');
            }else{
              self.$note.fadeOut(300);
              event.trigger('waterfall')
              toast(ret.errorMsg);
            }
          });
      },
    
      delete: function(){
        var self = this;
        $.post('/api/notes/delete', {id: this.id})
          .done(function(ret){
            if(ret.status === 0){
              toast('delete success');
              self.$note.remove();
              event.trigger('waterfall')
            }else{
              totas(ret.errorMsg);
            }
        });
      }
}
module.exports.note = Note