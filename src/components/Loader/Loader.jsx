import React from "react";
import { Box } from "@mui/material";

import loader from "assets/loader.svg";
import { CustomLoaderWrapper } from "./LoaderStyles";

export const Loader = () => {
  return (
    <CustomLoaderWrapper>
      <Box component="img" src={loader} alt="Loader" />;
    </CustomLoaderWrapper>
  );
};
