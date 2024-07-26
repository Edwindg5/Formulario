import React from 'react';
import './StudentListItem.css';

function StudentListItem({ student }) {
  return (
    <li className="student-list-item">
      Nombre del alumno: {student.studentName}, ID: {student.studentId}, Edad: {student.age}, Fecha de inscripción: {student.enrollmentDate}, Curso: {student.course}
    </li>
  );
}

export default StudentListItem;
