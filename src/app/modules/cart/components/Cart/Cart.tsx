/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import Box from 'app/modules/shared/components/Box';
import Button from 'app/modules/shared/components/Button';
import { cartSelectors } from '../../redux/cart.slice';
import { CartContext } from '../../context/CartContextControl';
import * as styles from './Cart.styles';
import CartItem from './CartItem';

type State = 'unmounted' | 'exited' | 'entering' | 'entered' | 'exiting';

const Cart: React.FC = () => {
  const products = useSelector(cartSelectors.selectAll);
  const { isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <div data-testid="cart-container">
      <Transition in={isCartOpen} timeout={styles.transition.duration}>
        {(state: State) => (
          <div>
            <styles.Overlay
              style={{
                ...styles.transition.defaultOverlayStyle,
                ...styles.transition.overlayStyle[state],
              }}
              onClick={toggleCart}
            />
            <styles.Cart
              style={{
                ...styles.transition.defaultCartStyle,
                ...styles.transition.cartStyle[state],
              }}
              as={Box}
            >
              {products.map((product) => (
                <CartItem key={product.uuid} product={product} />
              ))}
              <Button>avançar</Button>
            </styles.Cart>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Cart;
