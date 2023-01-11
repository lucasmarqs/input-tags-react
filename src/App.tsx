import { css } from '@emotion/react';

import TagsManagementForm from './tags-management-form';

function App() {
  return (
    <main css={css({
      padding: '0.3em',
      '@media(min-width: 600px)': {
        padding: '2em',
      }
    })}>
      <header id="header">
        <h1 css={css({
          marginBottom: '1.2em',
          small: {
            fontSize: '0.75em',
            color: 'lightslategray',
            '&::before': {
              content: '" "',
            }
          }
        })}>
          Welcome!
          <small>Tag management form</small>
        </h1>
      </header>

      <article>
        <TagsManagementForm />
      </article>
    </main>
  );
}

export default App;
