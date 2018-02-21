const Note = require('./note.js').note;
const Totas = require('./totas.js').totas;
const event = require('./event.js');

var noteControl = (function () {
    function load() {
        $.get('/api/notes').done(function (ret) {
            if (ret.status == 0) {
                $.each(ret.data, function (idx, artical) {
                    new Note({
                        id: artical.id,
                        text: artical.text,
                        createdTime :artical.createdAt          
                    })
                })
                event.trigger('waterfall')
            } else {
                Totas(ret.errorMsg)
            }
        }).fail(function () {
            Totas('网络异常')
        })
    }

    function add() {
       new Note();
    }

    return {
        load: load,
        add: add
    }
})()
module.exports.noteControl = noteControl