var request = require('supertest');
var app = require('../app.js');
var chai = require('chai');
var should = chai.should();
var User = require('../models/User');
var Device = require('../models/Device');

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /login', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/login')
      .expect(200, done);
  });
});


describe('User Model', function() {
  it('should create a new user', function(done) {
    var user = new User({
      email: 'test@gmail.com',
      password: 'password'
    });
    user.save(function(err) {
      if (err) return done(err);
      done();
    })
  });
});

var isvaliddevice = function(res){
   res.text.should.contain("authkey");

}
var isinvaliddevice = function(res){
   res.text.should.not.contain("authkey");

}

describe('POST /device', function(){
it("should return authkey with valid creds and device.", function(done){
    request(app)
        .post('/device')
        .send({email: "test@gmail.com",password:"password",deviceid:"aaa", model: "Nexus 5"})
       // .expect(res.text).to.contain("authkey")
       .expect(isvaliddevice)
        .end(done);
    })
});

describe('POST /device', function(){
it("should not return authkey with invalid creds", function(done){
    request(app)
        .post('/device')
        .send({email: "test@gmail.com",password:"password123",deviceid:"aaa", model: "Nexus 5"})
       // .expect(res.text).to.contain("authkey")
       .expect(isinvaliddevice)
        .end(done);
    })
});
//}); 
//});

describe('User Model', function() {

  it('should delete a user', function(done) {
    Device.remove({ owneremail: 'test@gmail.com' }, function(err) {
      if (err) return done(err);
      done();
    });
  });
});

describe('POST /location', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .post('/location')
      .expect(200, done);
  });
}); 


describe('GET /signup', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/signup')
      .expect(200, done);
  });
});

describe('GET /device', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/device')
      .expect(200, done);
  });
});

describe('GET /location', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/location')
      .expect(200, done);
  });
});

describe('GET /random-url', function() {
  it('should return 404', function(done) {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});
