import React from 'react';
import { User } from '../../../../../../redux/github/actions';
import withStyle from './withStyle';
import Card from '../../../../../../components/atoms/Card/Card';
import { Icon } from '../../../../../../components/icons';

interface UserProps {
  user?: User;
  className?: string;
}

const UserCard: React.FunctionComponent<UserProps> = ({ user, className }) => {
  console.log(user);
  return (
    <div className={className}>
      <Card>
        <div className='user-title'>
          <a rel='noreferrer' href={user?.htmlUrl} target='_blank'>
            <Icon name='GitHub' />
          </a>
        </div>
        <div className='user-body'>
          <h4 className='title'>{user?.login}</h4>
          <div className='details'>
            <img src={user?.avatarUrl} alt={user?.login} loading='lazy' />
          </div>
        </div>
        <ul className='user-footer'></ul>
      </Card>
    </div>
  );
};

export default withStyle(UserCard);
