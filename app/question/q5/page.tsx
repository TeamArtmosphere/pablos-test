import DefaultButton from '@/components/common/DefaultButton';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/imgs/logo.png';

const page = () => {
  return (
    <Box>
      <Typography variant='h4' mb={'30px'}>
        선호하는 장소의 유형을 선택해 주세요
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: '20px',
          }}
        >
          <Image src={logo} alt='H유형 이미지' width={70} />
          <DefaultButton name='H' />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: '20px',
          }}
        >
          <Image src={logo} alt='T유형 이미지' width={70} />
          <DefaultButton name='T' />
        </Box>
      </Box>
    </Box>
  );
};

export default page;
