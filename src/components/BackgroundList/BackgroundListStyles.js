const { styled, Grid } = require("@mui/material");

export const CustomGridItem = styled(Grid)({
  borderWidth: "8px",
  borderStyle: "solid",
});

export const CustomImg = styled("img")({
  display: "block",
  width: "100%",
  cursor: "pointer",
});
