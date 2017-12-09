var express = require('express');
var router = express.Router();
var Note = require('../model/note').note

/* GET users listing. */
router.get('/notes', function(req, res, next) {
  Note.findAll({raw:true}).then(notes=>{
    res.send({status:0,data:notes})
  })
});
router.post('/notes/add',function(req,res,next){
  var noteMsg =req.body.note
  Note.create({text:noteMsg}).then(Note.findOne({text:noteMsg})).then((notes=>{
      res.send({status:0,id:notes.id})
  })).catch(()=>{
    res.send({status:1,errorMsg:'Database Error'})
  })
  console.log('add...',noteMsg)
})
router.post('/notes/edit',function(req,res,next){
  Note.update({text:req.body.note},{where:{id:req.body.id}}).then(()=>{
    res.send({status:0})
  })
  console.log('eidt...')
})
router.post('/notes/delete',function(req,res,next){
  Note.destroy({where:{id:req.body.id}}).then(()=>{
    res.send({status:0})
  })
  console.log('delete...')
})

module.exports = router;
