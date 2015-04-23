var chai = require('chai');
var should = chai.should();
var User = require('../models/User');
var Device = require('../models/Device');



describe('User Model', function() {
  it('should create a new user', function(done) {
    var user = new User({
      email: 'test1@gmail.com',
      password: 'password'
    });
    user.save(function(err) {
      if (err) return done(err);
      done();
    })
  });

  it('should not create a user with the unique email', function(done) {
    var user = new User({
      email: 'test1@gmail.com',
      password: 'password'
    });
    user.save(function(err) {
      if (err) err.code.should.equal(11000);
      done();
    });
  });

  it('should find user by email', function(done) {
    User.findOne({ email: 'test1@gmail.com' }, function(err, user) {
      if (err) return done(err);
      user.email.should.equal('test1@gmail.com');
      done();
    });
  });





  it('should delete a user', function(done) {
    User.remove({ email: 'test1@gmail.com' }, function(err) {
      if (err) return done(err);
      done();
    });
  });
});



describe('Device Model', function() {
  it('should create a new device', function(done) {
    var device = new Device({
      owneremail: 'test1@gmail.com',
      password: 'password'
    });
    device.save(function(err) {
      if (err) return done(err);
      done();
    })
  });



  it('should delete a user', function(done) {
    Device.remove({ owneremail: 'test1@gmail.com' }, function(err) {
      if (err) return done(err);
      done();
    });
  });
});


