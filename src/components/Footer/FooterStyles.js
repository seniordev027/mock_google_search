import { Box, Link, styled } from "@mui/material";

export const CustomFooter = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "12px",
});

export const CustomLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  color: "#ffffff",
  textDecorationColor: "#ffffff",
});
