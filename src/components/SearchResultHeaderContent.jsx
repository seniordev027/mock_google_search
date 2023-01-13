import React from "react";
import { Box, styled } from "@mui/material";

import Logo from "./Logo";
import SearchForm from "./SearchForm";

const CustomContentWrapper = styled(Box)({
  display: "flex",
  alignItems: "center"
});

const CustomSearchWrapper = styled(Box)({
  flexGrow: 1,
  flex: "flex-start"
});

const CustomLogoWrapper = styled(Box)({
  width: "160px",
});

const SearchResultHeaderContent = () => {
  return (
    <CustomContentWrapper>
      <CustomLogoWrapper>
        <Logo />
      </CustomLogoWrapper>

      <CustomSearchWrapper>
        <SearchForm />
      </CustomSearchWrapper>
    </CustomContentWrapper>
  );
};

export default SearchResultHeaderContent;
