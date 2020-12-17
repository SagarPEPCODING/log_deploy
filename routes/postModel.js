const db = require('../Model/connection.js');

const adduserbyemailidpass = function (email_id, password, confirm_password) {
  console.log('postmodel' + password);
  return new Promise(function (resolve, reject) {
    db.query(
      'INSERT INTO login_data SET ?',
      {
        Email_id: email_id,
        password: password,
        confirm_password: confirm_password,
      },
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

module.exports.adduserbyemailidpass = adduserbyemailidpass;
