import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import RootNavigation from './src/navigations';

interface IProps {}

const AppRoot: React.FC<IProps> = (props: IProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h1>Brunooooooo</h1>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default AppRoot;
