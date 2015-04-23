/**
 * GET /
 * Home page.
 */
var passport = require('passport');
var User = require('../models/User');
var Device = require('../models/Device');
var secrets = require('../config/secrets');
var Location = require('../models/Location');

exports.index = function(req, res) {
   var data = [];
   var isdevice = "false";
  if (!req.user) {
  	console.log("no user");
         res.render('home', {
        title: 'Home',
        });
  } else {
  	User.findById(req.user.id, function(err, user) {
  		var email = user.email;
  		console.log(email);
  		Location.find({email:email},function(err,location){
             if (location) {
              isdevice = "true";
            }
  		  console.log(location);
             location.forEach(function(elem,index,array){
              console.log(elem.deviceid);
         	   console.log(elem.locations[elem.locations.length-1].lat);
          	   console.log(elem.locations[elem.locations.length-1].lng);
              data = [elem.deviceid,elem.locations[elem.locations.length-1].lat,elem.locations[elem.locations.length-1].lng];
             });
        console.log(data);
        res.render('home', {
        title: 'Home',
        data: data,
        });
 		});
  	});
  }

};