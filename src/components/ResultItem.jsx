import React from "react";
import { Box, Link } from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
  width: "100%",
  padding: "12px",
  border: "1px solid #808080",
  borderRadius: "8px",
});

const CustomLink = styled(Link)({
  fontWeight: "bold",
  textTransform: "uppercase",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline 2px",
    textUnderlineOffset: "4px"
  },
});

const CustomDescribe = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const ResultItem = ({ searchItem }) => {
  const { link, title, snippet } = searchItem;

  return (
    <Wrapper>
      <Box>
        <Box sx={{ mb: "12px" }}>
          <CustomLink href={link} target={"_blank"}>
            {title}
          </CustomLink>
        </Box>

        <CustomDescribe>
          {snippet}
        </CustomDescribe>
      </Box>
    </Wrapper>
  );
};

export default ResultItem;
