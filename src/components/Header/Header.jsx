import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar, IconButton } from "@mui/material";

import { CustomBox, CustomHeader, CustomLink } from "./HeaderStyles";

export const Header = () => {
  return (
    <CustomHeader>
      <CustomBox component="nav">
        <CustomLink
          href="https://mail.google.com/"
          target={"_blank"}
        >
          Gmail
        </CustomLink>

        <CustomLink
          href="https://www.google.com.ua/imghp"
          target={"_blank"}
        >
          Images
        </CustomLink>
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
