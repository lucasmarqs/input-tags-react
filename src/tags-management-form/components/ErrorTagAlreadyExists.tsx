import React, { useEffect } from 'react';
import { css, keyframes } from '@emotion/react';

export type ErrorTagAlreadyExistsProps = {
  open: boolean,
  duration: number,
  onClose: () => void,
};

const blink = keyframes`
  10% {
    opacity: 20%;
  }
  20% {
    opacity: 100%;
  }
  30% {
    opacity: 20%;
  }
  40% {
    opacity: 100%;
  }
  50% {
    opacity: 20%;
  }
  60% {
    opacity: 100%;
  }
`;

const ErrorTagAlreadyExists = ({ open, duration, onClose }: ErrorTagAlreadyExistsProps) => {
  useEffect(() => {
    const timeId = setTimeout(() => {
      onClose();
    }, duration)

    return () => clearTimeout(timeId);
  }, [open]);

  if (!open) return null;

  return (
    <React.Fragment>
      <span css={css({
        color: 'darkred',
        animation: `${blink} 1s infinite`,
      })}>
        Tag already exists
      </span>
    </React.Fragment>
  );
}

export default ErrorTagAlreadyExists;
