import React, { useState } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import './StudentForm.css';

function StudentForm({ onAddStudent }) {
  const [student, setStudent] = useState({
    studentName: '',
    studentId: '',
    age: '',
    enrollmentDate: '',
    course: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(student);
    setStudent({
      studentName: '',
      studentId: '',
      age: '',
      enrollmentDate: '',
      course: ''
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <Label text="Nombre del alumno" />
      <Input type="text" name="studentName" value={student.studentName} onChange={handleChange} />

      <Label text="ID del alumno" />
      <Input type="text" name="studentId" value={student.studentId} onChange={handleChange} />

      <Label text="Edad" />
      <Input type="number" name="age" value={student.age} onChange={handleChange} />

      <Label text="Fecha de inscripción" />
      <Input type="date" name="enrollmentDate" value={student.enrollmentDate} onChange={handleChange} />

      <Label text="Curso" />
      <Input type="text" name="course" value={student.course} onChange={handleChange} />

      <button type="submit">Registrar</button>
    </form>
  );
}

export default StudentForm;
