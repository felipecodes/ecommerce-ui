import { hot } from 'react-hot-loader/root';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import store, { persistor } from 'app/modules/shared/redux/store';
import routes from 'app/modules/shared/enums/routes';
import theme from 'app/modules/shared/styles/theme';
import Home from 'app/pages/home';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path={routes.home} component={Home} />
        </Switch>
      </ThemeProvider>
    </PersistGate>
  </Provider>
)

export default hot(App);
