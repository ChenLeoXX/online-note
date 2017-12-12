var express = require('express');
var router = express.Router();
var Note = require('../model/note').note

/* GET users listing. */
router.get('/notes', function(req, res, next) {
if(req.session.user){
  var uid = req.session.user.id
  Note.findAll({raw:true,where:{uid:uid}}).then(notes=>{
    res.send({status:0,data:notes})
  })
}else{
  Note.findAll({raw:true,where:{uid:null}}).then(notes=>{
    res.send({status:0,data:notes})
  })
}
});
//添加
router.post('/notes/add',function(req,res,next){
  var noteMsg =req.body.note
  if(req.session.user){
    var uid = req.session.user.id
    Note.create({text:noteMsg,uid:uid}).then(Note.findOne({uid:uid})).then((notes=>{  //查找唯一id,赋值给note实例，防止多次修改创建
        console.log(notes.createdAt)
        res.send({status:0,id:notes.id})
    })).catch(()=>{
      res.send({status:1,errorMsg:'Database Error'})
    })
  }else{
    Note.create({text:noteMsg}).then(Note.findOne({text:noteMsg,raw:true})).then((notes=>{  //查找唯一id,赋值给note实例，防止多次修改创建
      console.log(notes.createdAt)
      res.send({status:0,id:notes.id})
  })).catch(()=>{
    res.send({status:1,errorMsg:'Database Error'})
  })
  }
  console.log('add...')
})
//编辑
router.post('/notes/edit',function(req,res,next){
  if(req.session.user){
    var uid = req.session.user.id
    Note.update({text:req.body.note},{where:{id:req.body.id,uid:uid}}).then(()=>{
      res.send({status:0})
    })
  }else {
    Note.update({text:req.body.note},{where:{id:req.body.id}}).then(()=>{
      res.send({status:0})
    })
  }
})
//删除
router.post('/notes/delete',function(req,res,next){
  if(req.session.user){
    var uid = req.session.user.id
    Note.destroy({where:{id:req.body.id,uid:uid}}).then(()=>{
      res.send({status:0})
    })
  }else{
    Note.destroy({where:{id:req.body.id}}).then(()=>{
      res.send({status:0})
    })
  }
})

module.exports = router;
