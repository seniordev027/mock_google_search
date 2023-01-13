import React from "react";
import ModeIcon from "@mui/icons-material/Mode";
import LinkIcon from "@mui/icons-material/Link";
import { IconButton } from "@mui/material";

import { CustomFooter, CustomLink } from "./FooterStyles";

export const Footer = () => {
  return (
    <CustomFooter>
      <CustomLink href="#">
        <LinkIcon sx={{ fill: "#ffffff" }} />
        Photo of space
      </CustomLink>

      <IconButton
        sx={{
          "&:hover .MuiTouchRipple-root": {
            background: "#ffffff20",
          },
        }}
      >
        <ModeIcon sx={{ fill: "#ffffff" }} />
      </IconButton>
    </CustomFooter>
  );
};
