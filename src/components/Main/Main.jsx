import { Logo } from "components/Logo";
import { SearchForm } from "components/SearchForm";
import { ShortcutList } from "components/ShortcutList";
import React from "react";

import { CustomBox, CustomMain, CustomSearchWrapper } from "./MainStyles";

export const Main = () => {
  return (
    <CustomMain>
      <CustomBox>
        <Logo />
      </CustomBox>

      <CustomSearchWrapper>
        <SearchForm />
      </CustomSearchWrapper>

      <CustomBox>
        <ShortcutList />
      </CustomBox>
    </CustomMain>
  );
};
