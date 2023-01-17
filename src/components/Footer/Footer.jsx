import React, { useState } from "react";
import ModeIcon from "@mui/icons-material/Mode";
import LinkIcon from "@mui/icons-material/Link";

import {
  BackgroundMenu,
  BackgroundMenuButton,
  ButtonsContainer,
  CustomFooter,
  CustomLink,
} from "./FooterStyles";
import { ModalWindow } from "components/ModalWindow";
import { BacgroundList } from "components/BackgroundList";
import { useBackgroundContext } from "context/backgroundContext";
import { Box, Button, Typography } from "@mui/material";

export const Footer = () => {
  const { currentBackground, setCurrentBackground } = useBackgroundContext();
  const [isBackgroundMenu, setIsBackgroundMenu] = useState(false);
  const [checkedBg, setCheckedBg] = useState(currentBackground);

  const handleOpen = () => {
    setIsBackgroundMenu(true);
  };

  const handleAccept = () => {
    setCurrentBackground(checkedBg);
    setIsBackgroundMenu(false);
  };

  const handleCancel = () => {
    setCheckedBg(currentBackground)
    setIsBackgroundMenu(false);
  };

  return (
    <CustomFooter>
      <CustomLink href={currentBackground.url}>
        <LinkIcon sx={{ fill: "#ffffff" }} />
        {currentBackground.name}
      </CustomLink>

      <BackgroundMenuButton onClick={handleOpen}>
        <ModeIcon sx={{ fill: "#fff" }} />
      </BackgroundMenuButton>

      <ModalWindow open={isBackgroundMenu}>
        <BackgroundMenu>
          <Typography component="h2" variant="h5" align="center">
            Choose a background
          </Typography>

          <Box sx={{ m: "16px 0 24px" }}>
            <BacgroundList checkedBg={checkedBg} setCheckedBg={setCheckedBg} />
          </Box>

          <ButtonsContainer>
            <Button variant="contained" onClick={handleAccept}>
              Accept
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </ButtonsContainer>
        </BackgroundMenu>
      </ModalWindow>
    </CustomFooter>
  );
};
