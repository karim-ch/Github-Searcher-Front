import React, { useCallback } from 'react';
import debounce from 'lodash/debounce';
import useSearch from './useSearch';

function Github() {
  const { setQuery, data } = useSearch();

  console.log(data);

  const changeSearchFor = debounce(setQuery, 1000);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => changeSearchFor(event.target.value),
    [changeSearchFor],
  );

  return (
    <div className='App'>
      <input onChange={handleChange} placeholder='type here' />
    </div>
  );
}

export default Github;
