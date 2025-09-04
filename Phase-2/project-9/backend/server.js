import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Yash Sharma", course: "AIML" },
  { id: 2, name: "Priya Singh", course: "BCA" },
  { id: 3, name: "Aman Verma", course: "CS" }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.json(newStudent);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
