import React from 'react';
import Typography from 'app/modules/shared/components/Typography/Typography';
import { CartStateDTO } from '../../dto/CartDTO';
import * as styles from './CartItem.styles';

const CartItem: React.FC<{ product: CartStateDTO }> = ({ product }) => (
  <styles.CartItem data-testid={`${product.uuid}-cart-item`}>
    <styles.CartItemImage src={product.image} alt={product.description} />
    <div>
      <Typography component="span" variant="body" fontWeight="bold">
        {product.name}
      </Typography>
      <Typography variant="body">
        <Typography component="span" variant="body" fontWeight="bold">
          {product.pack.unities}
        </Typography>{' '}
        unidades por{' '}
        <Typography component="span" variant="body" fontWeight="bold">
          {product.pack.currentPrice}
        </Typography>
      </Typography>
    </div>
  </styles.CartItem>
);

export default CartItem;
