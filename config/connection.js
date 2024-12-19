const mongoClient = require("mongodb").MongoClient;
require('dotenv').config(); // Load environment variables

const state = {
  db: null,
};

module.exports.connect = function (done) {
  const url = process.env.MONGODB_URI; // Ensure this is the updated connection string
  const dbname = process.env.MONGODB_DBNAME;

  mongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
    if (err) {
      return done(err);
    }
    state.db = data.db(dbname);

    done();
  });
};

module.exports.get = function () {
  return state.db;
};
