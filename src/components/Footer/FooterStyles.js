import { Box, IconButton, Link, styled } from "@mui/material";

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

export const BackgroundMenuButton = styled(IconButton)({
  "&:hover .MuiTouchRipple-root": {
    background: "#ffffff20",
  },
});

export const BackgroundMenu = styled(Box)({
  background: "#fff",
  maxWidth: "600px",
  width: "100%",
  padding: "24px 16px 32px",
});

export const ButtonsContainer = styled(Box)({
  display: "flex",
  flexDirection: "row-reverse",
  gap: "12px",
  padding: "0 8px"
});
