# OpenLocate

OpenLocate is an OpenSource, self-hosted alternative to Google Device Manager and iCloud. Currently OpenLocate  supports Android, and allows users to locate their lost devices. Cross platform remote wipe functionality will come in the future.

> OpenLocate being developed by Henry Hoggard 
> for a final year Computer Science dissertation
> at Cardiff University.
> OpenLocate is intended to be used as a privacy conscious replacement 
> to iCloud and Google Device Manager. With OpenLocate YOU control your location data,
> rather than placing it in the hands of Google, Apple and consequently even the NSA.


![Image](https://i.imgur.com/IHeCAgL.png)

### Version
0.0.1

OpenLocate is still in development and will be buggy. Many features are still in development, however you can currently track your lost devices with OpenLocate!

### Tech

OpenLocate uses a number of open source projects to work properly, here are a few of the key technologies:

* [Nodejs] 
* [Mongoose]
* [MongoDB]
* [Express]
* [Passportjs]

### Installation

Please install Nodejs before running the installation:


```sh
$ git clone https://github.com/HenryHoggard/OpenLocate-Server
$ cd OpenLocate-Server
$ npm install
```
After you install all the required dependencies. Edit the following file and type a new random session secret:
* [config/secrets.js](https://github.com/HenryHoggard/OpenLocate-Server/blob/master/config/secrets.js)

You can then launch the server:
```sh
$ node app.js
```
### SSL

OpenLocate needs to be configured with SSL to be effective in keeping user data private. Currently only valid signed certificates are accepted by the mobile client. To use SSL please replace the following code in "app.js" with the relevant information for your certificates:
```js
 https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    }, app).listen(4000);

```


### Development

Want to contribute? 

Report issues or contribute new code.


License
----

GPL-V3


Linux Build
[![Linux Status](https://travis-ci.org/HenryHoggard/OpenLocate-Server.svg?branch=master)](https://travis-ci.org/HenryHoggard/OpenLocate-Server)

Windows Build
[![Windows status](https://ci.appveyor.com/api/projects/status/na5b5k29e6klw6l0?svg=true)](https://ci.appveyor.com/project/HenryHoggard/openlocate-server)

Code Review
[![Code Climate](https://codeclimate.com/repos/5538c805e30ba04c29000785/badges/8c01c787a5291ebf13bf/gpa.svg)](https://codeclimate.com/repos/5538c805e30ba04c29000785/feed)


