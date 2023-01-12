import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSearchContext } from '../context/context';

const SearchResult = () => {
  const navigate = useNavigate();
  const { searchValue } = useSearchContext();

  useEffect(() => {
    if (!searchValue) {
      navigate("/")
    }
  }, [searchValue]);

  return (
    <div>
      Search result: {searchValue}
    </div>
  );
};

export default SearchResult;
