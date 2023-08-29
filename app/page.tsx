'use client';

import DefaultButton from '@/components/common/DefaultButton';
import { Box, Container, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../public/imgs/logo.png';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const onClickStartTest = () => {
    router.push('/question/q1');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src={logo} alt='아트모스피어 로고' width={100} />
      <Box sx={{ mt: '30px', mb: '50px', textAlign: 'center' }}>
        <Typography variant='h3'>
          artmosphere
          <br />
          유저 성향 테스트
        </Typography>
      </Box>
      <DefaultButton name='테스트 시작하기' size='md' onClick={onClickStartTest} />
    </Box>
  );
}