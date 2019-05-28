import React from 'react';

import { SessionContextConsumer } from './session-context';

export const withSessionContext = WrappedComponent => {
  return props => (
    <SessionContextConsumer>
      {sessionContext => (
        <WrappedComponent {...props} sessionContext={sessionContext} />
      )}
    </SessionContextConsumer>
  );
};
