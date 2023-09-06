import ProgressBar from '@/components/Material/ProgressBar';
import DefaultButton from '@/components/common/DefaultButton';
import { Box, Typography } from '@mui/material';
import React from 'react';

const page = () => {
  const progress = 80;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
      <Typography variant='h4' mb={'30px'}>
        내가 더 중요하게 생각하는 것은
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', width: '100%' }}>
        <DefaultButton name='분위기' />
        <DefaultButton name='음식' />
      </Box>
      <ProgressBar progress={progress} />
    </Box>
  );
};

export default page;
