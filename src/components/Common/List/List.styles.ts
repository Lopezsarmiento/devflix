import styled from '@emotion/styled';

export const Container = styled.div`
  display: inline-block;
  padding: 50px;


  /* media query for resolutions above 600px */
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;