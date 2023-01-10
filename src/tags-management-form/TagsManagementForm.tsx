import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input from './Input';
import Button from './Button';

function normalizeTag(val: string): string {
  return val.trim();
};

function createSlugFor(tag: string): string {
  let slug = tag.toLocaleLowerCase();
  slug = slug.replace(' ', '-');
  return slug;
}

type Tags = Record<string, string>;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 380px;
  align-items: flex-start;
`;

const TagsList = styled.ul`
  padding-left: 0;
  display: flex;
  list-style: none;
  max-width: 380px;
  flex-wrap: wrap;

  li {
    margin: 4px;
    background-color: lightgray;
    padding: 6px 4px;
    border-radius: 4px;
    color: black;

    &::before {
      content: '#';
    }
  }
`;

export const TagsManagementForm = () => {
  const [tags, setTags] = useState<Tags>({});
  const [tagField, setTagField] = useState<string>('');

  return (
    <React.Fragment>
      <FormWrapper>
      <Input
        type="text"
        name="tag"
        autoComplete="off"
        aria-label="Enter tag name"
        placeholder="Enter tag name..."
        onChange={(event) => {
          setTagField(event.currentTarget.value)
        }}
        onKeyUp={(event) => {
          if (event.key !== 'Enter') return;
          event.preventDefault();
          document.getElementById('addTagButton')?.click();
        }}
        value={tagField}
      />

      <Button
        id="addTagButton"
        aria-label="Add tag"
        type="button"
        onClick={() => {
          const tag = normalizeTag(tagField);
          if (tag.length == 0) return;
          const slug = createSlugFor(tag);
          const updatedValue = {} as Tags;
          updatedValue[slug] = tag;
          setTags((prev) => ({ ...prev, ...updatedValue }));
          setTagField('');
        }}
      >
        Add
      </Button>
      </FormWrapper>

      <TagsList>
        {Object.keys(tags).map((slug: string) => {
          return (
            <li key={slug}>{tags[slug]}</li>
          );
        })}
      </TagsList>

    </React.Fragment>
  );
};
