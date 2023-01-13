import { Box, Button, styled } from "@mui/material";

export const CustomButton = styled(Button)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "112px",
  heihgt: "112px",
  padding: "16px 8px",
  color: "#ffffff",
  textTransform: "none",
  "&:hover .MuiTouchRipple-root": {
    background: "#ffffff15",
  },
});

export const ButtonInner = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "48px",
  height: "48px",
  background: "#ffffff",
  borderRadius: "50%",
});
