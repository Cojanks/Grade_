import React, { FC, useState } from 'react';
import { CompPropsWithChildren, CompPropsWithOnClick } from 'types';
import PersonAddAlOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import './ClassTableActions.css';
import AddStudent from './TableActions/AddStudent';

type StudentActionProps = {
  tooltip?: string;
} & CompPropsWithChildren &
  CompPropsWithOnClick;

const StudentAction: FC<StudentActionProps> = ({
  children,
  tooltip,
  onClick,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const setShowMessage = (isBool?: boolean) => {
    const toggle = isBool ? isBool : !isTooltipVisible;
    setIsTooltipVisible(toggle);
  };

  return (
    <>
      <button
        onClick={onClick}
        className="action-button"
        onMouseEnter={() => {
          setShowMessage(true);
        }}
        onMouseLeave={() => {
          setShowMessage(false);
        }}
      >
        <span className="action-icon"> {children}</span>
        <span className="action-desc"> {isTooltipVisible && tooltip}</span>
      </button>
    </>
  );
};

const ClassTableActions = () => {
  const [isAddStudentOpen, setisAddStudentOpen] = useState(false);

  const toggleAddStudent = () => {
    console.log('toggled');
    const currentState = isAddStudentOpen;
    setisAddStudentOpen(!currentState);
  };
  return (
    <>
      <div className="action-row">
        <StudentAction tooltip="Add/Remove Student" onClick={toggleAddStudent}>
          <PersonAddAlOutlinedIcon></PersonAddAlOutlinedIcon>
        </StudentAction>
      </div>
      <div className="action-section">
        {isAddStudentOpen && <AddStudent></AddStudent>}
      </div>
    </>
  );
};

export default ClassTableActions;
