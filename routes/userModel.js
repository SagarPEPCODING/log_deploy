const db = require("../Model/connection.js");

const getbyemailid = function (id) {
  console.log('email_id in usermodel :- ' + id);
  return new Promise(function (resolve, reject) {
    db.query(
      `SELECT * from login_data where Email_id="${id}"`,
      function (err, res) {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(res);
        }
      }
    );
  });
};

module.exports.getbyemailid = getbyemailid;
