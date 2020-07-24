import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from 'app/modules/shared/components/Grid';
import ProductCard from 'app/modules/product/components/ProductCard';
import fetchProducts from 'app/modules/product/redux/operations/fetchProducts';
import addToCart from 'app/modules/cart/redux/operations/addToCart';
import {
  productSelectors,
  productPackDiscountSelector,
} from 'app/modules/product/redux/product.slice';
import { CartStateDTO } from 'app/modules/cart/dto/CartDTO';

const Home: React.FC = () => {
  const products = useSelector(productSelectors.selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          {products.map((product) => (
            <Grid key={product.uuid} item xs={12} md={6} lg={3}>
              <ProductCard
                product={product}
                discountSelector={productPackDiscountSelector}
                addToCard={(cart: CartStateDTO): void => {
                  dispatch(addToCart(cart));
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
