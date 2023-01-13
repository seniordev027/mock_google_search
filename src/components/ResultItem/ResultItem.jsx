import React from "react";
import { Box } from "@mui/material";

import { CustomDescribe, CustomLink, Wrapper } from "./ResultItemStyles";

export const ResultItem = ({ searchItem }) => {
  const { link, title, snippet } = searchItem;

  return (
    <Wrapper>
      <Box>
        <Box sx={{ mb: "12px" }}>
          <CustomLink href={link} target={"_blank"}>
            {title}
          </CustomLink>
        </Box>

        <CustomDescribe>{snippet}</CustomDescribe>
      </Box>
    </Wrapper>
  );
};
