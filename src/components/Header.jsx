import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { AppBar, Avatar, IconButton, Link, styled } from "@mui/material";

import { Box } from "@mui/system";

const CustomHeader = styled(AppBar)({
  position: "static",
  flexDirection: "row",
  justifyContent: "end",
  alignItems: "center",
  gap: "24px",
  padding: "8px",
  background: "transparent",
  boxShadow: "none",
});

const CustomBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const CustomLink = styled(Link)({
  textDecoration: "none",
  fontSize: "14px",
  color: "inherit",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Header = () => {
  return (
    <CustomHeader>
      <CustomBox component="nav">
        <CustomLink href="#">Gmail</CustomLink>
        <CustomLink href="#">Images</CustomLink>
      </CustomBox>

      <CustomBox>
        <IconButton
          sx={{
            width: "40px",
            height: "40px",
            "&:hover .MuiTouchRipple-root": {
              background: "#ffffff20",
            },
          }}
        >
          <AppsIcon sx={{ fill: "#ffffff" }} />
        </IconButton>

        <IconButton>
          <Avatar sx={{ backgroundColor: "#e71190" }}>V</Avatar>
        </IconButton>
      </CustomBox>
    </CustomHeader>
  );
};

export default Header;
