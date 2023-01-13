import { Box, Container, styled } from "@mui/material";

import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";

const Wrapper = styled(Box)({
  background: "#808080",
});

const CustomContainer = styled(Container)({
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gap: "12px",
  minHeight: "100vh",
  padding: "12px",
});

const SearchResult = () => {
  return (
    <Wrapper>
      <CustomContainer>
        <SearchForm />
        <ResultList />
      </CustomContainer>
    </Wrapper>
  );
};

export default SearchResult;
