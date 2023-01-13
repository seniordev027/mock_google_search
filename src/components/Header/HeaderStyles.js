import { AppBar, Link, styled } from "@mui/material";

import { Box } from "@mui/system";

export const CustomHeader = styled(AppBar)({
  position: "static",
  flexDirection: "row",
  justifyContent: "end",
  alignItems: "center",
  gap: "24px",
  padding: "8px",
  background: "transparent",
  boxShadow: "none",
});

export const CustomBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

export const CustomLink = styled(Link)({
  textDecoration: "none",
  fontSize: "14px",
  color: "inherit",
  "&:hover": {
    textDecoration: "underline",
  },
});
