var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var userData
  if(req.session.user){
    userData={
      isLogin:true,
      user:{
        username: req.user.username,
        avatar:req.user._json.avatar_url
      }
    }
  }
  res.render('index',userData);
});

module.exports = router;
