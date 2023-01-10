import React from 'react';
import styled from '@emotion/styled'

import TagsManagementForm from './tags-management-form';

const MainInterface = styled.main`
  padding: 1.5em;
`;

const HeaderH1 = styled.h1`
  margin-bottom: 1.2em;
  small {
    font-size: 0.75em;
    color: lightslategray;
    &::before {
      content: ' ';
    }
  }
`

function App() {
  return (
    <MainInterface>
      <header id="header">
        <HeaderH1>
          Welcome!
          <small>Tag management form</small>
        </HeaderH1>
      </header>

      <article>
        <TagsManagementForm />
      </article>
    </MainInterface>
  );
}

export default App;
