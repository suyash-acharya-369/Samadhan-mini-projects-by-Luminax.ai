import React, { useEffect, useState } from "react";

export default function StudentDirectory() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  const addStudent = () => {
    if (name.trim() && course.trim()) {
      fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, course }),
      })
        .then((res) => res.json())
        .then((newStudent) => {
          setStudents([...students, newStudent]);
          setName("");
          setCourse("");
        });
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h1>Project - 9</h1>
      <h2>Student Directory</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px", padding: "6px" }}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{ marginRight: "10px", padding: "6px" }}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}
