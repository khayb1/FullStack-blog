import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Afraniephenix1@.",
  database: "mydb",
});
