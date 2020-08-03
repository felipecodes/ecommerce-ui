import React, { useContext } from 'react';
import { CartContext } from 'app/modules/cart/context/CartContextControl';
import * as styles from './Header.styles';
import Typography from '../../components/Typography/Typography';

const Header: React.FC = () => {
  const { toggleCart } = useContext(CartContext);

  return (
    <styles.Header>
      <Typography color="secondary" contrastText component="h1" variant="h1">
        Ecommerce UI
      </Typography>

      <styles.ShopCartIcon
        onClick={toggleCart as () => void}
        data-testid="open-cart-button"
      />
    </styles.Header>
  );
};

export default Header;
