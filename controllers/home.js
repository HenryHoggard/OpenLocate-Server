/**
 * GET /
 * Home page.
 */
var passport = require('passport');
var User = require('../models/User');
var Device = require('../models/Device');
var secrets = require('../config/secrets');
var Location = require('../models/Location');
var moment = require('moment');


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
             location.forEach(function(elem,index,array){

               var time = elem.locations[elem.locations.length-1].time;
               var newtime = moment(time).fromNow();
               var singledata = [];
              singledata = [elem.deviceid,elem.locations[elem.locations.length-1].lat,elem.locations[elem.locations.length-1].lng, newtime];
              data.push(singledata);

              console.log(singledata);
             });

        console.log(data);
        res.render('home', {
        title: 'Home',
        data: JSON.stringify(data),
        });
 		});
  	});
  }

};