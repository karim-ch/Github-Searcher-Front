import React from 'react';
import withStyle from './withStyle';

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({ className, ...props }) => {
  return <input className={className} {...props} />;
};

export default withStyle(SearchInput);
