const express = require('express')
const router = express.Router()
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy

passport.serializeUser(function (user, done) {
    console.log('---serializeUser---')
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    console.log('---deserializeUser---')
    done(null, obj);
});
passport.use(new GitHubStrategy({
        clientID: '8f1db74a8cebf0ee0696',
        clientSecret: '5b5d887a9156c7c485aab8346336b2b8cdefd549',
        callbackURL: "http://localhost:8080/auth/github/callback"},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

router.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('/');
  })
  
  router.get('/github',
    passport.authenticate('github'));
  
  router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        console.log('------------------sucess---------------------')
        console.log(req.user)
      req.session.user = {
        id: req.user.id,
        username: req.user.displayName || req.user.username,
        avatar: req.user._json.avatar_url,
        provider: req.user.provider
      };
      res.redirect('/');
    });
    module.exports = router