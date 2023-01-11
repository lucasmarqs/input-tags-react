import { MouseEventHandler } from 'react';
import { css } from '@emotion/react';
import * as styles from '../styles';

type TagItemProps = {
  slug: string,
  text: string,
  deleteTagFn: (slug: string) => MouseEventHandler,
};

const TagItem = ({ slug, text, deleteTagFn }: TagItemProps) => {
  return (
    <li key={slug}>
      {text}
      <button
        css={css({
          cursor: 'pointer',
          margin: '0 0 0 4px',
          textDecoration: 'underline',
          padding: '0',
        }, styles.button)}
        type="button"
        aria-label={`Delete tag ${text}`}
        onClick={deleteTagFn(slug)}
      >
        &times;
      </button>
    </li>
  );
};

export default TagItem;
