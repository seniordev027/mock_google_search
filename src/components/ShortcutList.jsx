import React, { useState } from "react";
import { List, ListItem, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import ShortcutItem from "./ShortcutItem";

const CustomList = styled(List)({
  padding: 0,
});

const CustomListItem = styled(ListItem)({
  padding: 0,
});

const ShortcutList = () => {
  const [ shortcuts, setShortcuts ] = useState([
    {
      id: 1,
      icon: <AddIcon sx={{ fill: "#000000" }} />,
      describe: "Add shortcut",
    },
  ]);

  const handleClick = () => {
    console.log("Start doing something");
  }

  return (
    <CustomList>
      <CustomListItem>
        {shortcuts.map((shortcut) => (
          <ShortcutItem
            key={shortcut.id}
            shortcut={shortcut}
            handleClick={handleClick}
          />
        ))}
      </CustomListItem>
    </CustomList>
  );
};

export default ShortcutList;
