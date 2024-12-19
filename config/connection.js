const mongoClient = require("mongodb").MongoClient;

const state = {
  db: null,
};

module.exports.connect = function (done) {
  const url = 'mongodb+srv://msb:msb.com@workspace.wwkix.mongodb.net/?retryWrites=true&w=majority&appName=workspace'
  const dbname = 'workspace';

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
