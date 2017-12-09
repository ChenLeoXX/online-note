const Sequelize = require('sequelize')
const path = require('path')
var sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database/database.sqlite')
})

var Note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING
    }
})

// Note.sync().then(() => {
//     Note.create({
//         text: 'hello world'
//     }).then(() => {
//         Note.findAll({
//             raw: true
//         }).then(notes => {
//             console.log(notes)
//         })
//     })
// });
module.exports.note= Note