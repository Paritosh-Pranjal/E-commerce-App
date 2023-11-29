import React from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';
const Button = (props: MUIButtonProps) => {
  return (
    <div>
      <MUIButton {...props}>{props.children}</MUIButton>
    </div>
  );
};

export default Button;
