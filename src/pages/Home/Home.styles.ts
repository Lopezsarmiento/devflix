import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px;
  height: 100vh;

  /* media query for resolutions above 600px */
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 50px;
  }
`;