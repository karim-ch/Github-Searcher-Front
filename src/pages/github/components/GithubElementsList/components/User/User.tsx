import React from 'react';
import { User as UserType } from '../../../../../../redux/github/actions';
import withStyle from './withStyle';

interface UserProps {
  user?: UserType;
  className?: string;
}

const User: React.FunctionComponent<UserProps> = ({ user, className }) => {
  console.log(user);
  return (
    <div className={className}>
      <h1>{user?.login}</h1>
    </div>
  );
};

export default withStyle(User);
