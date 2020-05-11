const sqlite3 = require('./node_modules/sqlite3').verbose();

let db = new sqlite3.Database('./sqlite.sql', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the sqlite.sql database.');
  });

  db.close();
