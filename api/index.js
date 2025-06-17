import express from "express";
// import mysql from "mysql2";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
const app = express();

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "blog",
// });

app.listen(8800, () => {
  console.log("connected to the backend");
});
