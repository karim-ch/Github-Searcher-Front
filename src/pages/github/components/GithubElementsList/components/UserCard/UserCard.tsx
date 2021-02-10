import React from 'react';
import { User } from '../../../../../../redux/github/actions';
import withStyle from './withStyle';
import { Card } from '../../../../../../components/molecules';
import { Icon } from '../../../../../../components/icons';

interface UserProps {
  user?: User;
  className?: string;
}

const UserCard: React.FunctionComponent<UserProps> = ({ user, className }) => {
  return (
    <div className={className}>
      <Card>
        <div className='user-header'>
          <img src={user?.avatarUrl} alt={user?.login} loading='lazy' />
          <div className='user-heading'>
            <a href={user?.htmlUrl} target='_blank' rel='noreferrer' className='link'>
              <h4 className='login'>@{user?.login}</h4>
            </a>

            <h4 className='name'>{user?.name}</h4>
            <h6>{user?.location}</h6>
          </div>
        </div>
        <div className='user-body'>
          {user?.bio && (
            <p className='bio'>
              <Icon name='Pen' />
              {user?.bio}
            </p>
          )}

          {user?.company && (
            <p>
              <Icon name='Company' />
              <em>Company : </em>
              {user?.company ?? 0}
            </p>
          )}

          <p>
            <Icon name='Checked' />
            <em>Joined : </em>
            {new Date(user?.createdAt ?? '').toDateString()}
          </p>

          <p>
            <Icon name='Folder' />
            <em>Repositories : </em>
            {user?.publicRepos ?? 0}
          </p>

          <p>
            <Icon name='Star' />
            <em>Followers : </em>
            {user?.followers ?? 0}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default withStyle(UserCard);
