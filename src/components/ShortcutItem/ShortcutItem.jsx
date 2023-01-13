import React from "react";

import { ButtonInner, CustomButton } from "./ShortcutItemStyles";

export const ShortcutItem = ({ shortcut, handleClick }) => {
  return (
    <CustomButton onClick={handleClick}>
      <ButtonInner>
        {shortcut.icon}
      </ButtonInner>

      {shortcut.describe}
    </CustomButton>
  );
};
