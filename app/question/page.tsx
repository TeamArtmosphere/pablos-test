'use client';

import DefaultButton from '@/components/common/DefaultButton';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getQuestion } from '@/api/axios-api';
import { ButtonBox } from '@/app/genuser/page';
import { FlexContainerCol } from '@/app/page';
import ProgressBar from '@/components/Material/ProgressBar';

export const browserPreventEvent = (event: () => void) => {
  history.pushState(null, '', location.href);
  event();
};

const Page = () => {
  // useState type 수정 필요
  const [questionData, setQuestionData] = useState<any>([]);
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    getQuestion(questionNumber)
      .then((data) => {
        console.log(data, 'ddd');
        setQuestionData(data.questions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [questionNumber]);

  const onClickNextQuestion = () => {
    setQuestionNumber((prev: number) => prev + 1);
  };

  const onClickPrevQuestion = () => {
    setQuestionNumber((prev: number) => prev - 1);
  };

  console.log(questionNumber);
  console.log(questionData, 'data');

  // 테스트 필요
  // useEffect(() => {
  //   history.pushState(null, '', location.href);
  //   window.addEventListener('popstate', () => {
  //     browserPreventEvent(onClickNextQuestion); // 임시용
  //   });
  //   return () => {
  //     window.removeEventListener('popstate', () => {
  //       browserPreventEvent(onClickNextQuestion); // 임시용
  //     });
  //   };
  // }, []);
  // 테스트 필요

  const progress = 40;
  return questionData ? (
    <Box sx={FlexContainerCol}>
      <Typography variant='h4' mb={'30px'}>
        {questionData?.question_title}
      </Typography>
      <Box sx={ButtonBox}>
        {/* {questionData?.map((question: any, idx: number) => {
          return (
            <Box key={idx} sx={ButtonBox}>
              <DefaultButton title={question.} size='md' onClick={onClickNextQuestion} />
            </Box>
          );
        })} */}
      </Box>
      <ProgressBar progress={progress} />
    </Box>
  ) : null;
};

export default Page;