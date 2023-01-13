import { Box, List, styled } from "@mui/material";

const styles = {
  background: "#ffffff",
  borderRadius: "8px",
};

export const CustomList = styled(List)(styles);

export const MessageContainer = styled(Box)({
  ...styles,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
});
