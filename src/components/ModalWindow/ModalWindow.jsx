import React from "react";
import { CustomModal } from "./ModalWindowStyles";

export const ModalWindow = ({
  children,
  open,
  ...props
}) => {
  return (
    <CustomModal open={open} {...props}>
      {children}
    </CustomModal>
  );
};
