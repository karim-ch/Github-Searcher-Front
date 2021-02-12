import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { User, Repository } from '@redux/github/actions';
import LoadingCard from '@components/molecules/CardLoading';
import useSearchResult from './useSearchResult';
import UserCard from './components/UserCard';
import RepositoryCard from './components/RepositoryCard';

import withStyle from './withStyle';

interface GithubElementsListProps {
  className?: string;
}

const GithubElementsList: React.FunctionComponent<GithubElementsListProps> = ({ className }) => {
  const { items, error, type, loading } = useSearchResult();

  if (error) {
    return (
      <div className={className}>
        <h1>Something Went Wrong ...</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={className}>
        <div className='wrapper-flex'>
          {Array.from({ length: 6 }).map((_, i) => (
            <LoadingCard key={i} className='item' />
          ))}
        </div>
      </div>
    );
  }

  if (items && isEmpty(items)) {
    return (
      <div className={className}>
        <h1>No result found, please retry !</h1>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className='wrapper-flex'>
        {items &&
          items.map((item: User | Repository) => (
            <div className='item hvr-grow' key={item.id}>
              {type === 'User' ? <UserCard user={item} /> : <RepositoryCard repository={item} />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default withStyle(GithubElementsList);
