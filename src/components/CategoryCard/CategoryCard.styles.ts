import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface StyledLinkProps {
  image: string;
}

export const Wrapper = styled.div`
 `;

export const StyledLink = styled(Link)<StyledLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 150px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-color: white;
  color: white;
  text-decoration: none;
  border-radius: 15px;
  box-shadow: 10px 10px 18px -1px rgba(0,0,0,0.66);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
    opacity: 0.6;
    border: 1px solid white;
  }

  /* media query for resolutions above 600px */
  @media (min-width: 600px) {
    width: 250px;
    height: 250px;
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
