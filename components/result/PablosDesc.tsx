import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '@/style/theme';

interface PablosDescProps {
  viewItem: any;
}

const PablosDesc = ({ viewItem }: PablosDescProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h3' sx={{ mb: { mobile: '22px', laptop: '32px' } }}>
        {viewItem?.name}유형은
        <br />
        <span className='sep_typo'>{`'${viewItem?.intro}'`}</span>을 가장 중요하게 생각해요.
      </Typography>
      <Typography variant='body1' sx={{ mb: { mobile: '105px', laptop: '160px' } }}>
        {viewItem?.summary}
      </Typography>
      <Box>
        {viewItem &&
          viewItem.descriptions.map((desc: any, idx: number) => {
            return (
              <Box key={idx} sx={{ mb: { mobile: '44px', laptop: '48px' } }}>
                <Typography
                  variant='h5'
                  color={'grey.500'}
                  fontFamily={'Pretendard-Regular'}
                  sx={{
                    display: 'inline',
                    lineHeight: '32px',
                    minWidth: '154px',
                    height: '32px',
                    bgcolor: theme.palette.secondary.main,
                    border: '1px solid',
                    borderColor: theme.palette.primary.main,
                    borderRadius: '4px',
                    p: '4px 12px',
                  }}
                >
                  {desc.title}
                </Typography>
                <Typography variant='body1' color={'grey.500'} fontFamily={'Pretendard-Regular'} mt={'12px'}>
                  {desc.content}
                </Typography>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default PablosDesc;
333639;
