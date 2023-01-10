import React, { useState } from 'react';

function normalizeTag(val: string): string {
  return val.trim();
};

function createSlugFor(tag: string): string {
  let slug = tag.toLocaleLowerCase();
  slug = slug.replace(' ', '-');
  return slug;
}

type Tags = Record<string, string>;

export const TagsManagementForm = () => {
  const [tags, setTags] = useState<Tags>({});
  const [tagField, setTagField] = useState<string>('');

  return (
    <React.Fragment>
      <input
        type="text"
        name="tag"
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

      <button
        id="addTagButton"
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
      </button>

      <ul>
        {Object.keys(tags).map((slug: string) => {
          return (
            <li key={slug}>{tags[slug]}</li>
          );
        })}
      </ul>

    </React.Fragment>
  );
};
