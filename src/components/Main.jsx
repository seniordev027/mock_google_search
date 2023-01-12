import React from "react";
import { Box, styled } from "@mui/material";

import Logo from "./Logo";
import SearchForm from "./SearchForm";
import ShortcutList from "./ShortcutList";

const CustomMain = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "12vh",
});

const CustomBox = styled(Box)({
  marginBottom: "38px",
});

export const Main = () => {
  return (
    <CustomMain>
      <CustomBox>
        <Logo />
      </CustomBox>

      <CustomBox sx={{width: "100%"}}>
        <SearchForm />
      </CustomBox>

      <CustomBox>
        <ShortcutList />
      </CustomBox>
    </CustomMain>
  );
};

export default Main;
