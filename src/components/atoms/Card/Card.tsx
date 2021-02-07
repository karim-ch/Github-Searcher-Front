import React from 'react';
import withStyle from './withStyle';

interface CardProps {
  className?: string;
}

const Card: React.FunctionComponent<CardProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default withStyle(Card);
