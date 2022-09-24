import { Box } from '@mui/system';
import React from 'react';

const Base = ({ children }) => {
  return (
    <Box
      style={{
        maxWidth: '1140px',
        margin: 'auto'
      }}
    >
      {children}
    </Box>
  );
};

export default Base;