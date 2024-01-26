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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  @media (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;