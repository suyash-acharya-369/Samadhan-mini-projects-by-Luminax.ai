let student = {
  name: "Riya",
  age: 20,
  subjects: {
    math: 85,
    science: 90,
    english: 78
  }
};

console.log("Student Name:", student.name);             
console.log("Science Marks:", student.subjects.science); 

let students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 92 },
  { name: "Raj", marks: 45 },
  { name: "Simran", marks: 67 }
];

let studentList = students.map(s => s.name + ": " + s.marks);
console.log("Student List:", studentList);

let passedStudents = students.filter(s => s.marks >= 50);
console.log("Passed Students:", passedStudents);

let total = students.reduce((sum, s) => sum + s.marks, 0);
let average = total / students.length;
console.log("Total Marks:", total);
console.log("Average Marks:", average);

let topper = students.reduce((max, s) => (s.marks > max.marks ? s : max));
console.log("Topper:", topper);