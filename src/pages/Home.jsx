import React, { useState } from 'react';
import StudentForm from '../components/organisms/StudentForm';
import StudentListItem from '../components/molecules/StudentListItem';
import Header from '../components/atoms/Header';
import './Home.css';

function Home() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="home">
      <Header />
      <StudentForm onAddStudent={addStudent} />
      <ul className="student-list">
        {students.map((student, index) => (
          <StudentListItem key={index} student={student} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
