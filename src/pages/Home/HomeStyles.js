import { Box, styled } from "@mui/material";

import img from "assets/page_bg.jpg";

export const PageWrapper = styled(Box)({
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  minHeight: "100vh",
  padding: "0 12px",
  background: `url(${img}) center / cover no-repeat`,
});
