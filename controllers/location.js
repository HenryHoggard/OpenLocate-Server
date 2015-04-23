var passport = require('passport');
var User = require('../models/User');
var secrets = require('../config/secrets');
var Device = require('../models/Device');
var location = require('../models/Location');


module.exports.postLocation = function(req,res) {
  console.log(req.body.deviceid);
  console.log(req.body.email);
  console.log(req.body.authkey);
  Device.findOne({deviceid: req.body.deviceid}, function(err,device) {
  	  console.log(device);

  	if (!device) {
  		res.send("Device not registered!");
  		return "error";
  	}
    if (err) {
        res.send(err);
        return err;
    }
    if (device.authkey == req.body.authkey) {
       console.log(req.body.authkey);
       console.log(device.authkey);
    // device.locations.push({loc:[req.body.longitude, req.body.latitude]});
       location.findOneAndUpdate(
       	{deviceid:req.body.deviceid,email:req.body.email},
        {$push:{ locations: {lat:req.body.lat,lng:req.body.lng}}},
        {safe:true,upsert:true},
        function(err){
        if(err){
                console.log(err);
        }else{
                console.log("Successfully added");
        }
});
       res.send("Success");

     /*  var location = new Location({
       deviceid: req.body.deviceid,
       location: [req.body.longitude,req.body.latitude],
        });
       location.save({"deviceid":req.body.deviceid,"location":[req.body.longitude,req.body.latitude]},function (err) {
       if (err) {
		console.log(err);
       }
       else {
     	console.log("Location saved");
       }*/
//});
    } else { 
       res.send("Authentication failure");
};

});
};
exports.index = function(req, res) {
 res.send("HELLO");
};