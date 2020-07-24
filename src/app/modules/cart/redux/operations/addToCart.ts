import { createAction } from '@reduxjs/toolkit';
import { CartStateDTO } from 'app/modules/cart/dto/CartDTO';

const ADD_TO_CART = 'cart/ADD_TO_CART';
const addToCart = createAction<CartStateDTO, typeof ADD_TO_CART>(ADD_TO_CART);

export default addToCart;
