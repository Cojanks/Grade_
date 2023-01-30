import React, { FC, useState } from 'react';
import { StudentProps } from 'types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import './ClassTable.css';
import ClassTableActions from './ClassTableActions';

type ClassTableProps = {
  students?: StudentProps[];
};

type GradeBadgeProps = {
  grade: number;
  gradeTypeSelect: string;
};

type PronounSignifierProps = {
  pronounCode: number;
};

type PronounKeyProps = {
  [key: string]: string;
};

const GradeBadge: FC<GradeBadgeProps> = ({
  grade,
  gradeTypeSelect,
}: GradeBadgeProps) => {
  let letters = '';
  let classes = 'badge ';
  if (grade > 97) {
    letters = 'A+';
  } else if (grade > 94) {
    letters = 'A ';
  } else if (grade >= 90) {
    letters = 'A-';
  } else if (grade > 87) {
    letters = 'B+';
  } else if (grade > 84) {
    letters = 'B ';
  } else if (grade >= 80) {
    letters = 'B-';
  } else if (grade > 77) {
    letters = 'C+';
  } else if (grade > 74) {
    letters = 'C ';
  } else if (grade >= 70) {
    letters = 'C-';
  } else if (grade > 67) {
    letters = 'D+';
  } else if (grade > 64) {
    letters = 'D ';
  } else if (grade >= 60) {
    letters = 'D-';
  } else if (grade <= 60) {
    letters = 'F ';
  } else {
    letters = '|';
  }

  if (letters.includes('+')) {
    classes += 'plus';
  } else if (letters.includes('-')) {
    classes += 'minus';
  }

  classes += ' ' + letters.toLowerCase().replace(/[^a-zA-Z]/g, '');

  return (
    <div className={classes}>
      {gradeTypeSelect === 'number' ? grade : letters}
    </div>
  );
};

const PronounSignifier: FC<PronounSignifierProps> = ({ pronounCode }) => {
  let classes = 'pronouns ';
  let pronounKey: PronounKeyProps = {
    1: 'He/Him',
    2: 'She/Her',
    3: 'They/Them',
  };

  if (pronounCode === 3) {
    classes += 'they';
  } else if (pronounCode === 2) {
    classes += 'her';
  } else {
    classes += 'him';
  }
  return <span className={classes}>{pronounKey[pronounCode]}</span>;
};

const ClassTable: FC<ClassTableProps> = ({
  students = [],
}: ClassTableProps) => {
  const studentsArr = students ? students : [];

  const [gradeTypeSelect, setGradeTypeSelect] = useState('number');

  const gradeTypeClick = (e: any) => {
    e.target.id === 'number'
      ? setGradeTypeSelect('number')
      : setGradeTypeSelect('letter');
  };

  return (
    <>
      {/* TODO: get this from DB, make the class title dynamic */}
      <div className="table-actions">
        {/* <ClassTableActions></ClassTableActions> */}
      </div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID: </TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">
                Current Grade
                <div className="th-secondary">
                  <span
                    id="number"
                    className={gradeTypeSelect === 'number' ? 'selected' : ''}
                    onClick={gradeTypeClick}
                  >
                    Number
                  </span>{' '}
                  /{' '}
                  <span
                    id="letter"
                    className={gradeTypeSelect === 'letter' ? 'selected' : ''}
                    onClick={gradeTypeClick}
                  >
                    Letter
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsArr.map((student) => (
              <TableRow
                key={student.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {student.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  <div className="name">{student.goesBy}</div>
                  <div className="real-name">
                    ({student.name})
                    <PronounSignifier
                      pronounCode={student.preferredPronouns}
                    ></PronounSignifier>
                  </div>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <GradeBadge
                    grade={student.currentGrade}
                    gradeTypeSelect={gradeTypeSelect}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ClassTable;
