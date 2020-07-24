import React from 'react';
import { useSelector } from 'react-redux';
import Box from 'app/modules/shared/components/Box';
import Button from 'app/modules/shared/components/Button';
import { cartSelectors } from '../../redux/cart.slice';
import * as styles from './Cart.styles';
import CartItem from './CartItem';

const Cart: React.FC<{ toggleCart: () => void }> = ({ toggleCart }) => {
  const products = useSelector(cartSelectors.selectAll);

  return (
    <div data-testid="cart-container">
      <styles.Overlay onClick={toggleCart} />
      <styles.Cart as={Box}>
        {products.map((product) => (
          <CartItem key={product.uuid} product={product} />
        ))}
        <Button>avançar</Button>
      </styles.Cart>
    </div>
  );
};

export default Cart;
