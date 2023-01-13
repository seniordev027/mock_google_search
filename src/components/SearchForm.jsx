import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, OutlinedInput, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

import { useSearchContext } from "../context/context";

const CustomForm = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

const InputContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "52px 1fr 44px",
  justifyItems: "center",
  alignItems: "center",
  maxWidth: "560px",
  width: "100%",
  borderRadius: "28px",
  background: "#ffffff",
});

const CustomInput = styled(OutlinedInput)({
  width: "100%",
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    padding: "12px 0",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

const SearchForm = () => {
  const { setIsModal } = useSearchContext();

  const {
    inputValue,
    setInputValue
  } = useSearchContext();

  const navigate = useNavigate();

  const handleClick = () => {
    setIsModal(true);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue) {
      navigate(`/search?q=${inputValue}`);
    }
  };

  return (
    <CustomForm component="form" onSubmit={handleSubmit}>
      <InputContainer>
        <SearchIcon />
        <CustomInput
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search Google or type a URL"
        />

        <IconButton onClick={handleClick} sx={{ justifySelf: "start" }}>
          <MicIcon color="primary" />
        </IconButton>
      </InputContainer>
    </CustomForm>
  );
};

export default SearchForm;
