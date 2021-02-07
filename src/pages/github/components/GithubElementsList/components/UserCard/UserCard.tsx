import React from 'react';
import { User } from '../../../../../../redux/github/actions';
import withStyle from './withStyle';

interface UserProps {
  user?: User;
  className?: string;
}

const UserCard: React.FunctionComponent<UserProps> = ({ user, className }) => {
  console.log(user);
  return (
    <div className={className}>
      <h1>{user?.login}</h1>
    </div>
  );
};

export default withStyle(UserCard);
