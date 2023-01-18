const { IconButton, styled } = require("@mui/material");

export const CustomIconButton = styled(IconButton)({
  zIndex: "10",
  width: "47px",
  background: "#fff",
  "&:hover .MuiTouchRipple-root": {
    background: "	#1976d2",
  },
  "& .MuiSvgIcon-root": {
    zIndex: 1,
  }
});