import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import RootContainer from './Containers/Root';

import Reducers from './Reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default function App() {
  return (
    <Provider store={createStoreWithMiddleware(Reducers)}>
      <RootContainer />
    </Provider>
  );
}
