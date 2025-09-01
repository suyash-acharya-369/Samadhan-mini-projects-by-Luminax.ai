// Project-5

const express = require("express");

const app = express();
const students = [
  { id: 1, name: "Aarav", age: 20 },
  { id: 2, name: "Meera", age: 21 },
  { id: 3, name: "Karan", age: 22 }
];

app.get("/students", (req, res) => {
  res.json(students);  // sends data in JSON format
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
