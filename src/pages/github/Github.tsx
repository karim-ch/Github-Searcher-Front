import React from 'react';
import GithubElementsList from './components/GithubElementsList';
import Search from './components/Search';
import withStyle from './withStyle';

interface GithubProps {
  className?: string;
}

const Github: React.FunctionComponent<GithubProps> = ({ className }) => {
  return (
    <div className={className}>
      <Search />
      <GithubElementsList />
    </div>
  );
};

export default withStyle(Github);
