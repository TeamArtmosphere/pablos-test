'use client';

import ProgressBar from '@/components/Material/ProgressBar';
import DefaultButton from '@/components/common/DefaultButton';
import { answerData } from '@/recoil/atom';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';

const Page = () => {
  const [answer, setAnswer] = useRecoilState(answerData);

  const onClickStoreAnswer = (e: any) => {
    setAnswer({ ...answer, address: e.currentTarget.name });
  };

  console.log(answer);

  const progress = 30;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
      <Typography variant='h4' mb={'30px'}>
        거주 지역을 선택해주세요
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', width: '100%' }}>
        {/* map */}
        <DefaultButton name='수색/증산' onClick={onClickStoreAnswer} />
        <DefaultButton name='신사/역촌' />
        <DefaultButton name='응암' />
        <DefaultButton name='그 외 은평구' />
        <DefaultButton name='타지역' />
      </Box>
      <ProgressBar progress={progress} />
    </Box>
  );
};

export default Page;
