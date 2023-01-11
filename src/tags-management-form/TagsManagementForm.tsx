import React, { MouseEventHandler, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import * as styles from './styles';
import TagItem from './components/TagItem';
import { getTags } from './data/api';
import ErrorTagAlreadyExists from './components/ErrorTagAlreadyExists';

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
  const [errorTagAlreadyExists, setErrorTagAlreadyExists] = useState(false);

  useEffect(() => {
    const loadTagsToState = async () => {
      let loadedTags = await getTags();
      setTags((prev) => {
        const newTags = loadedTags.reduce((acc, current) => {
          acc[current.slug] = current.text;
          return acc
        }, {} as Tags)

        return { ...newTags, ...prev };
      });
    }

    loadTagsToState();
  }, []);

  function deleteTagBySlug(slug: string): MouseEventHandler {
    return function () {
      if (window.confirm(`Do you want to delete the tag ${tags[slug]}?`)) {
        setTags((prev) => {
          const updatedTags = { ...prev }
          delete updatedTags[slug];
          return updatedTags;
        });
      }
    }
  }

  function handleDuplicatedTag(slug: string) {
    setErrorTagAlreadyExists(true);

    setTagField('');
  }

  return (
    <React.Fragment>
      <div css={css({
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '380px',
        alignItems: 'flex-start',
        'input + button': {
          marginLeft: '8px',
        }
      })}>
        <input
          css={styles.input}
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

        <button
          css={css({
            minWidth: '4em',
            },
            styles.button
          )}
          id="addTagButton"
          aria-label="Add tag"
          type="button"
          onClick={() => {
            const tag = normalizeTag(tagField);
            if (tag.length === 0) return;
            const slug = createSlugFor(tag);
            if (slug in tags) return handleDuplicatedTag(slug);
            const updatedValue = {} as Tags;
            updatedValue[slug] = tag;
            setTags((prev) => ({ ...prev, ...updatedValue }));
            setTagField('');
          }}
        >
          Add
        </button>
      </div>

      <div css={css({
        display: 'flex',
        lineHeight: '2em',
      })}>
        <ErrorTagAlreadyExists
          open={errorTagAlreadyExists}
          duration={2000}
          onClose={() => setErrorTagAlreadyExists(false)}
        />
      </div>

      <ul css={css({
        paddingLeft: 0,
        display: 'flex',
        listStyle: 'none',
        maxWidth: '380px',
        flexWrap: 'wrap',

        li: {
          margin: '4px',
          backgroundColor: 'lightgray',
          padding: '6px 4px',
          borderRadius: '4px',
          color: 'black',

          '&::before': {
            content: '"#"',
          }
        }
      })}>
        {Object.keys(tags).map((slug) => (
          <TagItem
            key={slug}
            slug={slug}
            text={tags[slug]}
            deleteTagFn={deleteTagBySlug}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};
