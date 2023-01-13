import { Box, OutlinedInput, styled } from "@mui/material";

export const CustomForm = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const InputContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "52px 1fr 44px",
  justifyItems: "center",
  alignItems: "center",
  maxWidth: "560px",
  width: "100%",
  borderRadius: "28px",
  background: "#ffffff",
});

export const CustomInput = styled(OutlinedInput)({
  width: "100%",
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    padding: "12px 0",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
