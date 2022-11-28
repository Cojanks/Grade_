import React, { FC, useState } from 'react';
import { CompPropsWithChildren } from 'types';
import PersonAddAlOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import './ClassTableActions.css';

type StudentActionProps = {
  action?: (params: any) => any;
  tooltip?: string;
} & CompPropsWithChildren;

const StudentAction: FC<StudentActionProps> = ({ children, tooltip }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const setShowMessage = (isBool?: boolean) => {
    const toggle = isBool ? isBool : !isTooltipVisible;
    setIsTooltipVisible(toggle);
  };
  return (
    <>
      <button
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
  return (
    <div className="action-row">
      <StudentAction tooltip="Add/Remove Student">
        <PersonAddAlOutlinedIcon></PersonAddAlOutlinedIcon>
      </StudentAction>
    </div>
  );
};

export default ClassTableActions;
