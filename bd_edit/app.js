const sqlite3 = require("sqlite3");
let db = new sqlite3.Database("./bd_edit/work.db", (err) => {
  if (err) {
    console.log("Error when creating the database", err)
    } else {
    console.log("Database created!")
    }
  })
const insertData = () => {
  console.log("Insert data")
  db.run("INSERT INTO Noise (Noise_meaning) VALUES (?)", ["Zilibobka"]);
  }
insertData()
const readData = () => {
    console.log("Read data from contacts");
    db.all("SELECT rowid AS Id_pattern, Noise_meaning FROM Noise", function(err, rows) {
    rows.forEach(function(row) {
    console.log(row.Id_pattern + ":" + row.Noise_meaning);
    });
  });
  }
  readData()
db.close();