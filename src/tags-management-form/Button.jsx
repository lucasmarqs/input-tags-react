import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  font-size: 1em;
  padding: 0.5em;
  background-color: lightgray;
  border: none;
  outline: none;
  border-radius: 4px;
  min-width: 4em;

  &:hover {
    background-color: gray;
  }

  &:focus {
    box-shadow: 0 0 0 3px darkgray;
  }

  &:active {
    background-color: dimgray;
    color: ghostwhite;
  }
`;

export default Button;
