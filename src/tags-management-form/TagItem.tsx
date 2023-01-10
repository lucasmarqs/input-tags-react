import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

type TagItemProps = {
  slug: string,
  text: string,
  deleteTagFn: (slug: string) => MouseEventHandler,
};

const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0 0 4px 4px;
  text-decoration: underline;
  cursor: pointer;
  color: gray;

  &:hover {
    background-color: gray;
    color: ghostwhite;
  }

  &:focus {
    box-shadow: 0 0 0 3px darkgray;
  }

  &:active {
    background-color: dimgray;
    color: ghostwhite;
  }
`;

const TagItem = ({ slug, text, deleteTagFn }: TagItemProps) => {
  return (
    <li key={slug}>
      {text}
      <CloseButton
      type="button"
      aria-label={`Delete tag ${text}`}
      onClick={deleteTagFn(slug)}
      >
        &times;
      </CloseButton>
    </li>
  );
};

export default TagItem;
