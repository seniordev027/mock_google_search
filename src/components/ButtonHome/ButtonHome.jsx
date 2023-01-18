import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import { CustomIconButton } from './ButtonHomeStyles';

export const ButtonHome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }
  return (
    <CustomIconButton onClick={handleClick}>
      <HomeIcon />
    </CustomIconButton>
  );
};
