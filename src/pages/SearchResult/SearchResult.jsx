import { ResultList, SearchForm } from "components";
import { CustomContainer, PageWrapper } from "./SearchResultStyles";

export const SearchResult = () => {
  return (
    <PageWrapper>
      <CustomContainer>
        <SearchForm />
        <ResultList />
      </CustomContainer>
    </PageWrapper>
  );
};
