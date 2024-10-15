import { Button, Form, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [courses, setCourses] = useState(['Programowanie w C#', 'Angular dla początkujących', 'Kurs Django']);
  const [nameSurname, setNameSurname] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const changeNameAndSurname = e => {
    setNameSurname(e);
  };

  const selectCourseByNumber = e => {
    setCourseNumber(e);
  };

  const checkCourseInRangeAndSetValue = () => {
    const index = parseInt(courseNumber, 10) - 1;
    if (index >= 0 && index < courses.length) {
      setSelectedCourse(courses[index]);
    } else {
      setSelectedCourse('');
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    checkCourseInRangeAndSetValue();

    console.log(nameSurname + ' ' + selectedCourse);
  };

  return (
    <>
      <Container fluid>
        <h1>Liczba kursów: {courses.length}</h1>

        <ol>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ol>
        <Form>
          <Form.Group>
            <Form.Label>Imię i nazwisko</Form.Label>
            <Form.Control type='text' onChange={e => changeNameAndSurname(e.target.value)} value={nameSurname} />
            <Form.Label>Numer kursu:</Form.Label>
            <Form.Control type='number' value={courseNumber} onChange={e => selectCourseByNumber(e.target.value)} />
            <br />
            <Button variant='primary' onClick={handleOnSubmit}>
              Zapisz do kursu
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default App;
