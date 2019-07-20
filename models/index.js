var Datastore = require('nedb'),

  users = new Datastore({
    filename: __dirname + '/../db/users.db',
    autoload: true
  });



module.exports = {
  users
}