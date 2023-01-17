import React from "react";
import { Grid } from "@mui/material";

import { useBackgroundContext } from "context/backgroundContext";
import { CustomImg, CustomGridItem } from "./BackgroundListStyles";

export const BacgroundList = ({ checkedBg, setCheckedBg }) => {
  const { backgrounds } = useBackgroundContext();

  return (
    <Grid container>
      {backgrounds.map((bg) => (
        <CustomGridItem
          item
          key={bg.id}
          xs={6}
          sm={4}
          onClick={() => setCheckedBg(bg)}
          sx={{
            borderColor: checkedBg.id === bg.id ? "#808080" : "transparent",
          }}
        >
          <CustomImg src={bg.img} alt={bg.name} />
        </CustomGridItem>
      ))}
    </Grid>
  );
};
