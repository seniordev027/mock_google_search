import { Box, styled } from "@mui/material";

export const PageWrapper = styled(Box)({
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  minHeight: "100vh",
  padding: "0 12px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
});
