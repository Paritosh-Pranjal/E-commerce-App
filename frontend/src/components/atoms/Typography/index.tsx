import React from 'react';
import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@mui/material';
const Typography = (props: MUITypographyProps) => {
  return (
    <div>
      <MUITypography {...props}>{props.children}</MUITypography>
    </div>
  );
};

export default Typography;
