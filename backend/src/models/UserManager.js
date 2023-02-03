const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [user.title]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }

  verifyEmailAndPasswordAndNext(email) {
    return this.connection.query(
      `select id, firstname, lastname, admin, city, hashedPassword from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = userManager;
