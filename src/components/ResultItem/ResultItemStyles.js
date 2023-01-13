import { Box, Link } from "@mui/material";
import styled from "@emotion/styled";

export const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
  width: "100%",
  padding: "12px",
  border: "1px solid #808080",
  borderRadius: "8px",
});

export const CustomLink = styled(Link)({
  fontWeight: "bold",
  textTransform: "uppercase",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline 2px",
    textUnderlineOffset: "4px"
  },
});

export const CustomDescribe = styled(Box)({
  display: "flex",
  alignItems: "center",
});