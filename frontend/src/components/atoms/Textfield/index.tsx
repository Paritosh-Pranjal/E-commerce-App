import React from 'react';
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material';
const TextField = (props: MUITextFieldProps) => {
  return (
    <div>
      <MUITextField {...props}>{props.children}</MUITextField>
    </div>
  );
};

export default TextField;
