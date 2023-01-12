import React from "react";
import { Box, Button, styled } from "@mui/material";

const CustomButton = styled(Button)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "112px",
  heihgt: "112px",
  padding: "16px 8px",
  color: "#ffffff",
  textTransform: 'none',
  "&:hover .MuiTouchRipple-root": {
    background: "#ffffff15"
  }
});

const ButtonInner = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "48px",
  height: "48px",
  background: "#ffffff",
  borderRadius: "50%"
});

const ShortcutItem = ({ shortcut, handleClick }) => {
  return (
    <CustomButton onClick={handleClick}>
      <ButtonInner sx={{}}>
        {shortcut.icon}
      </ButtonInner>

      {shortcut.describe}
    </CustomButton>
  );
};

export default ShortcutItem;
