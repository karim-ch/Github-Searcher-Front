import React from 'react';
import isEmpty from 'lodash/isEmpty';
import useSearchResult from './useSearchResult';
import { User, Repository } from '../../../../redux/github/actions';
import UserCard from './components/UserCard';
import withStyle from './withStyle';
import RepositoryCard from './components/RepositoryCard';
import LoadingCard from '../../../../components/molecules/CardLoading/';

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
          {Array.from({ length: 6 }).map(() => (
            <LoadingCard className='item' />
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
