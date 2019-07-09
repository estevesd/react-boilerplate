import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';

import * as styled from './styled';

const App = () => (
  <styled.Container>
    <styled.Wrapper>
      <styled.Title>Dashboard</styled.Title>
      <styled.Paragraph>
        Boiler Plate inspired by{' '}
        <styled.Link
          href="https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a"
          target="_blank"
        >
          React Bolt
        </styled.Link>
      </styled.Paragraph>
    </styled.Wrapper>
  </styled.Container>
);

// export default App;
export default withAuthenticator(App, true);
