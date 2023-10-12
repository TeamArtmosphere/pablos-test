export const FlexBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1920px',
  m: '0 auto',
};
export const FlexBoxCol = { ...FlexBox, flexDirection: 'column' };
export const FlexContainer = { ...FlexBox, width: '100%', height: '100%' };
export const FlexContainerCol = { ...FlexBoxCol, width: '100%', height: '100%' };
export const ButtonBox = { ...FlexContainerCol, gap: '10px', width: '100%' };
