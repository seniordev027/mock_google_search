import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ListItem } from "@mui/material";

import { CustomList, MessageContainer } from "./ResultListStyles";
import { fetchSearchData } from "api/searchAPI";
import { useSearchContext } from "context/context";
import { ResultItem } from "components/ResultItem";

export const ResultList = () => {
  const { setInputValue } = useSearchContext();
  const [searchData, setSearchData] = useState([]);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q");
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchValue) {
      navigate("/");
      return;
    }

    setInputValue(searchValue);

    fetchSearchData(searchValue).then((searchData) => {
      setSearchData(searchData);
    });
  }, [searchValue]);

  return (
    <>
      {searchData.length > 0 
      ? <CustomList>
          {searchData.map((searchItem) => (
            <ListItem key={searchItem.formattedUrl}>
              <ResultItem searchItem={searchItem} />
            </ListItem>
          ))}
        </CustomList>

      : <MessageContainer>
          Nothing was found for your request...
        </MessageContainer>
      }
    </>
  );
};
