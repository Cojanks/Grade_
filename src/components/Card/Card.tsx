import React, { FC } from 'react';
import { CompPropsWithChildren } from 'types';
import './Card.css';

type CardProps = {
  rounded?: boolean;
  padding?: 'tight' | 'padded';
  size?: 'wide' | 'normal' | 'small' | 'xs';
  centered?: boolean;
} & CompPropsWithChildren;

const Card: FC<CardProps> = ({
  children,
  rounded = true,
  padding,
  size,
  centered = false,
}) => {
  const getClasses = () => {
    let classes = 'card';
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

export default Card;
