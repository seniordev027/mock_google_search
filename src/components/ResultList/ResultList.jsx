import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ListItem } from "@mui/material";

import { CustomList, MessageContainer } from "./ResultListStyles";
import { fetchSearchData } from "api/searchAPI";
import { useSearchContext } from "context/context";
import { ResultItem } from "components/ResultItem";
import { Loader } from "components/Loader";

export const ResultList = () => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setInputValue } = useSearchContext();
  const [searchParams] = useSearchParams();
  const searchParamsItem = searchParams.get("q");
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParamsItem) {
      navigate("/");
      return;
    }

    const getSearchData = async () => {
      setLoading(true);
      const response = await fetchSearchData(searchParamsItem);
      setInputValue(searchParamsItem);
      setSearchData(response);
      setLoading(false);
    };

    getSearchData();
  }, [searchParamsItem]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {searchData.length > 0 ? (
        <CustomList>
          {searchData.map((searchItem) => (
            <ListItem key={searchItem.formattedUrl}>
              <ResultItem searchItem={searchItem} />
            </ListItem>
          ))}
        </CustomList>
      ) : (
        <MessageContainer>
          Nothing was found for your request...
        </MessageContainer>
      )}
    </>
  );
};
