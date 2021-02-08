import React from 'react';
import isEmpty from 'lodash/isEmpty';
import useSearch from './useSearch';
import { User, Repository } from '../../../../redux/github/actions';
import UserCard from './components/UserCard';
import withStyle from './withStyle';
import RepositoryCard from './components/RepositoryCard';

interface GithubElementsListProps {
  className?: string;
}

const GithubElementsList: React.FunctionComponent<GithubElementsListProps> = ({ className }) => {
  const { items, loading, error } = useSearch();

  if (error) {
    return <div className={className}>{error}</div>;
  }

  if (loading) {
    return (
      <div className={className}>
        <h1>Loading ...</h1>
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

  // For some reason, there's some repository without names, and users without logins so we will test to display it or not
  return (
    <div className={className}>
      <div className='wrapper-flex'>
        {!isEmpty(items) &&
          items.map((item: User | Repository) => {
            if ((item as User).login)
              return (
                <div className='item hvr-grow' key={item.id}>
                  <UserCard user={item} />
                </div>
              );
            if ((item as Repository).name)
              return (
                <div className='item hvr-grow' key={item.id}>
                  <RepositoryCard repository={item} />
                </div>
              );
            return null;
          })}
      </div>
    </div>
  );
};

export default withStyle(GithubElementsList);
