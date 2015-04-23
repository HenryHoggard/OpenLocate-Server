var mongoose = require('mongoose/');


var DeviceSchema = new mongoose.Schema({
  deviceid: {type: String, unique: true},
  ownername: String,
  owneremail: String,
  model: String,
  colour: String,
  description: String,
  authkey: String,
  userid: String,

});

var Device = mongoose.model('Device',DeviceSchema);

module.exports = mongoose.model('Device', DeviceSchema);

//var Project = mongoose.model('Project');

