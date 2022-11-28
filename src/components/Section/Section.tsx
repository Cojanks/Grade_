import React, { FC } from 'react';
import { CompPropsWithChildren } from 'types';
import './Section.css';

type SectionProps = {
  rounded?: boolean;
  padding?: 'tight' | 'padded';
  size?: 'wide' | 'normal' | 'small' | 'xs';
  centered?: boolean;
} & CompPropsWithChildren;

const Section: FC<SectionProps> = ({
  children,
  rounded,
  padding,
  size,
  centered = false,
}) => {
  const getClasses = () => {
    let classes = 'section';
    !rounded ? (classes += ' square') : (classes += '');

    if (padding === 'tight') {
      classes += ' tight';
    } else if (padding === 'padded') {
      classes += ' padded';
    }

    if (size) {
      classes += ' ' + size;
    }

    if (centered) {
      classes += ' centered';
    }

    return classes;
  };
  return <div className={getClasses()}>{children}</div>;
};

export default Section;
