import { Box } from '@mui/system';
import React from 'react';
import SelectBodyTypeStyles from './SelectBodyType.module.css';

const SelectBodyType = ({ children }) => {
  return (
    <>
      <Box component="main" className={SelectBodyTypeStyles['body-type-main']}>
        {children}
      </Box>
    </>
  );
};

export default SelectBodyType;