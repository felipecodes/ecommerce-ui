import React from 'react';
import * as styles from './Header.styles';
import Typography from '../../components/Typography/Typography';

const Header: React.FC<{ toggleCart: () => void }> = ({ toggleCart }) => (
  <styles.Header>
    <Typography color="secondary" contrastText component="h1" variant="h1">
      Sempre em Casa
    </Typography>

    <styles.ShopCartIcon onClick={toggleCart} data-testid="open-cart-button" />
  </styles.Header>
);

export default Header;
