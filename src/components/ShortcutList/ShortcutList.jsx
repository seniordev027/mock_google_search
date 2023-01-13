import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { CustomList, CustomListItem } from "./ShortcutListStyles";
import { ShortcutItem } from "components/ShortcutItem";

export const ShortcutList = () => {
  const [shortcuts, setShortcuts] = useState([
    {
      id: 1,
      icon: <AddIcon sx={{ fill: "#000000" }} />,
      describe: "Add shortcut",
    },
  ]);

  const handleClick = () => {
    console.log("Start doing something");
  };

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
