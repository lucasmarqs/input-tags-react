import { css } from '@emotion/react';

export const button = css({
  fontSize: '1em',
  padding: '0.5em',
  backgroundColor: 'lightgray',
  border: 'none',
  outline: 'none',
  borderRadius: '4px',

  '&:hover': {
    backgroundColor: 'gray',
  },

  '&:focus': {
    boxShadow: '0 0 0 3px darkgray',
  },

  '&:active': {
    backgroundColor: 'dimgray',
    color: 'ghostwhite',
  }
});

export const input = css({
  border: 'none',
  borderBottom: '1px solid lightgray',
  padding: '0.5em 0',
  fontSize: '1em',
  transition: 'border 300ms ease-in',

  '&:focus': {
    outline: 'none',
    borderBottom: '1px solid black',
  },
});
