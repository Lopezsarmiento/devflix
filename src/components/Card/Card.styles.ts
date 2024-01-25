// components/Card.js
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface CardContainerProps {
  image: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 250px;
  height: 100px;
  position: relative;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 5px;
  background-size: inherit;
  background-position: center;
  background-image: ${(props) => `url(${props.image})`};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
    opacity: 0.6;
    border: 1px solid white;
    background-size: cover;
  }

  @media (min-width: 600px) {
    width: 200px;
    height: 200px;
    flex-basis: 40%;
  }

  @media (min-width: 700px) {
    flex-basis: 20%;
  }
`;

export const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background-color: transparent;
  color: white;
  text-align: left;
  font-size: 1rem;
`;
