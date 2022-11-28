import ClassTable from 'components/ClassTable/ClassTable';
import Section from 'components/Section/Section';
import React, { useEffect, useState } from 'react';

const Class = () => {
  const [httpError, sethttpError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const featchClassStudents = async () => {
      fetch('http://localhost:3003')
        .then((res) => {
          if (res.status >= 400) {
            sethttpError(true);
            throw new Error('Server responds with error!');
          }
          return res.json();
        })
        .then(
          (students) => {
            setStudents(students);
            // console.log(students);
            setIsLoaded(true);
          },
          (err) => {
            sethttpError(true);
            setIsLoaded(true);
          }
        );
    };

    featchClassStudents();
  }, []);

  return (
    <div style={{ margin: '20px 0' }}>
      {/* TODO: Make this a component */}
      <h2 style={{ margin: '40px 0', textAlign: 'center' }}>
        Mr. Jenkins Class
      </h2>
      <Section centered={true} size="normal">
        {httpError
          ? 'Having trouble querying for students in this class, I have sent myself a bug report and will get back to you. Feel free to refresh and see if this corrects the problem..'
          : isLoaded && <ClassTable students={students}></ClassTable>}
      </Section>
    </div>
  );
};

export default Class;
