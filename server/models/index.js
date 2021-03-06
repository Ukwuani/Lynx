var Datastore = require('nedb'),

  users = new Datastore({
    filename: __dirname + '/../db/users.db',
    autoload: true
  });

  results = new Datastore({
    filename: __dirname + '/../db/results.db',
    autoload: true
  });

  transactions = new Datastore({
    filename: __dirname + '/../db/transactions.db',
    autoload: true
  });


  transactions.ensureIndex({ fieldName: 'cvvNumber', expireAfterSeconds: 120 });


module.exports = {
  users,
  results,
  transactions
}


