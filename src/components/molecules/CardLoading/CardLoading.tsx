import React from 'react';
import withStyle from './withStyle';

interface CardProps {
  className?: string;
}

const CardLoading: React.FunctionComponent<CardProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <div className='image' />
      <div className='content'>
        <div className='h2' />
        <div className='h3' />
        <div className='h3' />
        <div className='h4' />
      </div>
    </div>
  );
};

export default withStyle(CardLoading);
