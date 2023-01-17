import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

import { useSearchContext } from "context/searchContext";
import { CustomForm, CustomInput, InputContainer } from "./SearchFormStyles";

export const SearchForm = () => {
  const { setVoiceMode } = useSearchContext();
  const { inputValue, setInputValue } = useSearchContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setVoiceMode(true);
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
