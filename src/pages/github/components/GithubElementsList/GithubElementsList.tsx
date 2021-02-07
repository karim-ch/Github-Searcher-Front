import React from 'react';
import useSearch from './useSearch';
import { User as UserType } from '../../../../redux/github/actions';
import User from './components/User';
import withStyle from './withStyle';

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
          <div className='item' key={item.id}>
            <User user={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyle(GithubElementsList);
