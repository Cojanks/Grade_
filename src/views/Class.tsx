import ClassTable from 'components/ClassTable/ClassTable';
import Card from 'components/Card/Card';
import React from 'react';
import { useGetAllStudentsQuery } from 'store/slices/api';

const Class = () => {
  const { data, error, isLoading } = useGetAllStudentsQuery();

  return (
    <>
      <h2 style={{ margin: '40px 0', textAlign: 'center', color: '#94b6ea' }}>
        Mr. Roboto's Classes
      </h2>
      <Card centered={true} size="normal">
        <div className="class-change">
          {/* TODO: make this into component */}
          <h3>1st Period Math</h3>
        </div>
        {error ? (
          <div style={{ textAlign: 'center' }}>
            'Having trouble querying for students in this class, I have sent
            myself a bug report and will get back to you. Feel free to refresh
            and see if this corrects the problem..'
          </div>
        ) : (
          data && <ClassTable students={data}></ClassTable>
        )}
      </Card>
    </>
  );
};

export default Class;
