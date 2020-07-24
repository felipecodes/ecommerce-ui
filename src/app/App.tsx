import { hot } from 'react-hot-loader/root';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store, { persistor } from 'app/modules/shared/redux/store';
import routes from 'app/modules/shared/enums/routes';
import theme from 'app/modules/shared/styles/theme';
import Home from 'app/pages/Home';
import GlobalStyles from 'app/modules/shared/styles/GlobalStyles';
import Cart from 'app/modules/cart/components/Cart';
import Header from 'app/modules/shared/layout/Header';
import CartContextControl from 'app/modules/cart/context/CartContextControl';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <CartContextControl>
          <Header />
          <Switch>
            <Route path={routes.HOME} component={Home} />
          </Switch>
          <Cart />
        </CartContextControl>
      </PersistGate>
    </ThemeProvider>
  </Provider>
);

export default hot(App);
