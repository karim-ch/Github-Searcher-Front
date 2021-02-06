import React from 'react';
import useSearch from './useSearch';

function GithubElementsList() {
  const { data } = useSearch();
  console.log(data);
  return <div>Heeloo</div>;
}

export default GithubElementsList;
