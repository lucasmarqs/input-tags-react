import React from 'react';
import styled from '@emotion/styled';

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 0.5em 0;
  font-size: 1em;
  transition: border 300ms ease-in;

  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

export default Input;
