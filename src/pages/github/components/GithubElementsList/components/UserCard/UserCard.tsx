import React from 'react';
import { User } from '../../../../../../redux/github/actions';
import withStyle from './withStyle';
import Card from '../../../../../../components/atoms/Card/Card';

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
              <em> ✐ </em>
              {user?.bio}
            </p>
          )}

          <p>
            <em> ✓ Joined : </em>
            {user?.createdAt}
          </p>

          <p>
            <em> ⚛ Repositories : </em>
            {user?.publicRepos}
          </p>

          <p>
            <em> ☆ Followers : </em>
            {user?.followers}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default withStyle(UserCard);
