import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface StyledLinkProps {
  imageUrl: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  border-radius: 30px;
  box-shadow: 10px 10px 18px -1px rgba(0,0,0,0.66);
 `;

export const StyledLink = styled(Link)<StyledLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-color: white;
  color: white;
  text-decoration: none;
  border-radius: 15px;


  &:hover {
    filter: blur(0.8px);
  }

  /* media query for resolutions above 700px */
  @media (min-width: 700px) {
    flex-direction: row;
    width: 300px;
    height: 500px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  border-radius: 5px;
  background-color: transparent;
`;
