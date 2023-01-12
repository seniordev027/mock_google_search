import React from "react";
import ModeIcon from "@mui/icons-material/Mode";
import LinkIcon from "@mui/icons-material/Link";
import { Box, IconButton, Link, styled } from "@mui/material";

const CustomFooter = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "12px",
});

const CustomLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  color: "#ffffff",
  textDecorationColor: "#ffffff",
});

const Footer = () => {
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

export default Footer;
