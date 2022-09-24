import { Box } from '@mui/system';
import React from 'react';
import Base from '../../Constants/PageStructures/Base';

export const NotFound = () => {
  return (
    <>
      <Base>
        <Box style={{padding: '0 15px', margin: '20px 0'}}>
          <Box component="span" style={{fontSize: '24px', fontWeight: 700}}>404.</Box>
          <Box component="span" style={{fontSize: '24px', color: 'gray'}}> That's an error.</Box>
        </Box>
        <Box style={{padding: '0 15px', margin: '20px 0'}}>
          <Box component="span" style={{fontSize: '24px'}}>The requested URL was not found.</Box>
          <Box component="span" style={{fontSize: '24px', color: 'gray'}}> That's all we know.</Box>
        </Box>
      </Base>
    </>
  );
};
