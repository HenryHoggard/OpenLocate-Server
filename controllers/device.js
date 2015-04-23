var passport = require('passport');
var User = require('../models/User');
var Device = require('../models/Device');
var secrets = require('../config/secrets');
var bcrypt = require('bcrypt');
module.exports.getDevices = function(req,res) {
res.send("hello");

};
var isValidPassword = function(user, password){
  return bcrypt.compareSync(password, user.password);

}


module.exports.createDevice = function(req,res,next) {
  var email = req.body.email;
   User.findOne({ 'email' :  email }, 
      function(err, user) {
        // In case of any error, return using the done method
        if (err)
          return (err);
        // Username does not exist, log error & redirect back
        if (!user){
          console.log('User Not Found with username '+email);
          return (null, false, 
                res.send('User Not found.'));                 
        }
        // User exists but wrong password, log the error 
        if (!isValidPassword(user, req.body.password)){
          console.log('Invalid Password');
          return (null, false, 
              res.send('Invalid Password'));
        }
        // User and password both match, return user from 
        // done method which will be treated like success
        console.log("win!");

        require('crypto').randomBytes(24, function(ex, buf) {
          var authkey = buf.toString('hex');
          console.log(authkey);

          Device.update({email:email}, {$set: { deviceid: req.body.deviceid, model: req.body.model, authkey:authkey }}, {upsert: true}, function(err){if (err) { console.log(err);}})	;     
          user.authkey = authkey;
          user.save(function(err) {
             if (err) return (err);
               console.log("saved");
               res.send("authkey="+authkey+",email="+email);
              });
          });
        //return done(null, user);
      }
    );
 };
 /*User.findById(req.user.id, function(err, user) {
    if (err) return next(err);
var device = new Device({  
    name: req.body.name,
    description: req.body.description,
    owner: user.profile.name,
    ownerid: req.user.id,
  });
project.save(function(err) {
      if (err) return next(err);
      req.flash('success', { msg: 'Project created.' });
      res.redirect('/projects');
    });

});*/
