const Note = require('./note.js').note;
const Toast = require('./toast.js').toast;
const Event = require('mod/event.js');

let noteControl = (function () {
    function load() {
        $.get('/api/notes').done(function (ret) {
            if (ret.status === 0) {
                $.each(ret.data, function (idx, artical) {
                    new Note({
                        id: artical.id,
                        text: artical.text
                    })
                })
                Event.trigger('waterfall')
            } else {
                Toast(ret.errorMsg)
            }
        }).fail(function () {
            Toast('网络异常')
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