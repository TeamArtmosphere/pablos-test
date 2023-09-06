import ProgressBar from '@/components/Material/ProgressBar';
import DefaultButton from '@/components/common/DefaultButton';
import { Box, Typography } from '@mui/material';
import React from 'react';

const page = () => {
  const progress = 70;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
      <Typography variant='h4' mb={'30px'}>
        내가 선호하는 장소는
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', width: '100%' }}>
        <DefaultButton name='조용한 곳' />
        <DefaultButton name='사교적인 곳' />
      </Box>
      <ProgressBar progress={progress} />
    </Box>
  );
};

export default page;
