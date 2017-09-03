const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports = {
  // uri: 'mongodb://localhost:27017/mean-angular-2', //Development
  uri: 'mongodb://sienna:Password1!@ds115124.mlab.com:15124/angular2app090217', //Production
  secret: crypto,
  db: 'angular2app090217'
}
