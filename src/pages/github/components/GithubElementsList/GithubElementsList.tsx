import React from 'react';
import useSearch from './useSearch';
import { User as UserType } from '../../../../redux/github/actions';
import UserCard from './components/UserCard';
import withStyle from './withStyle';
import RepositoryCard from './components/RepositoryCard';

interface GithubElementsListProps {
  className?: string;
}

const GithubElementsList: React.FunctionComponent<GithubElementsListProps> = ({ className }) => {
  const { items } = useSearch();
  console.log(items);
  return (
    <div className={className}>
      <div className='wrapper-flex'>
        {items.map((item: UserType) => (
          <div className='item hvr-grow' key={item.id}>
            {item?.type === 'User' ? (
              <UserCard user={item} />
            ) : (
              <RepositoryCard repository={item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyle(GithubElementsList);
