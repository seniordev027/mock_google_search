import {
  CustomContainer,
  CustomPageTop,
  PageWrapper
} from "./SearchResultStyles";

import {
  ButtonHome,
  ResultList,
  SearchForm
} from "components";

export const SearchResult = () => {
  return (
    <PageWrapper>
      <CustomContainer>
        <CustomPageTop sx={{display: "flex"}}>
          <ButtonHome />
          <SearchForm />
        </CustomPageTop>

        <ResultList />
      </CustomContainer>
    </PageWrapper>
  );
};
