import React from 'react';
import GithubElementsList from './components/GithubElementsList';
import Search from './components/Search';

function Github() {
  return (
    <div>
      <Search />
      <GithubElementsList />
    </div>
  );
}

export default Github;
