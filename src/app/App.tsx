import { hot } from 'react-hot-loader/root';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from 'app/modules/shared/redux/store';
import routes from 'app/modules/shared/enums/routes';
import theme from 'app/modules/shared/styles/theme';
import Home from 'app/pages/Home';
import GlobalStyles from './modules/shared/styles/GlobalStyles';
import Header from './modules/shared/layout/Header';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path={routes.HOME} component={Home} />
      </Switch>
    </ThemeProvider>
  </Provider>
);

export default hot(App);
