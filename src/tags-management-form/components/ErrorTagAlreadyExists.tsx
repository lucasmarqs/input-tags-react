import React, { useEffect } from 'react';
import styled from '@emotion/styled';

export type ErrorTagAlreadyExistsProps = {
  open: boolean,
  duration: number,
  onClose: () => void,
};

const Alert = styled.span`
  color: darkred;
  animation: blink 1s infinite;

  @keyframes blink {
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
      <Alert>Tag already exists</Alert>
    </React.Fragment>
  );
}

export default ErrorTagAlreadyExists;
