const sqlite3 = require("sqlite3");

let db = new sqlite3.Database("./bd_edit/work.db", (err) => {
  if (err) {
    console.log("Error when creating the database", err)
    } else {
    console.log("Database created!")
    }
})


const insertData = (need, tbl, col) => {
  console.log("Insert data")
  db.run(`INSERT INTO ${tbl} (${col}) VALUES (?)`, [need]);
}

// let need = 'Hello world'
// let tbl = 'Noise'
// let col = 'Noise_meaning'

// insertData(need, tbl, col)

const readData = (need, tbl) => {
  console.log("Read data from contacts");

  return db.all(`SELECT ${need} FROM ${tbl}`)
}