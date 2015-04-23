var mongoose = require('mongoose/');


var LocationSchema = new mongoose.Schema({
  deviceid: String,
  email:String,
  locations: [{
     time: {type: Date, default: Date.now},
     lat: String,
     lng: String}
       ],
});

var Location = mongoose.model('Location',LocationSchema);

module.exports = mongoose.model('Location', LocationSchema);

//var Project = mongoose.model('Project');

