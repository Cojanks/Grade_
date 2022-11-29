import ClassTable from 'components/ClassTable/ClassTable';
import Section from 'components/Section/Section';
import React from 'react';
import { useGetAllStudentsQuery } from 'store/slices/api';

const Class = () => {
  const { data, error, isLoading } = useGetAllStudentsQuery();

  return (
    <div style={{ margin: '20px 0' }}>
      {/* TODO: Make this a component */}
      <h2 style={{ margin: '40px 0', textAlign: 'center' }}>
        Mr. Jenkins Class
      </h2>
      <Section centered={true} size="normal">
        {error
          ? 'Having trouble querying for students in this class, I have sent myself a bug report and will get back to you. Feel free to refresh and see if this corrects the problem..'
          : data && <ClassTable students={data}></ClassTable>}
      </Section>
    </div>
  );
};

export default Class;
