/**
 * This async action is used for retriving all products for home page listing
 */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductDTO, ProductStateDTO } from '../../dto/ProductDTO';
import { PRODUCTS } from 'app/modules/shared/enums/api';

const fetchProducts = createAsyncThunk<ProductStateDTO[]> (
  'product/FETCH_PRODUCTS',
  async () => {
    const response = await axios.get<{ items: ProductDTO[] }>(
      `${process.env.API_URL}${PRODUCTS}`
    );

    const products = response.data.items;
    return products.map(product => ({
      id: product.id,
      uuid: product.uuid,
      name: product.name,
      image: product.image,
      description: product.description,
      packs: product.packs.map(pack => ({
        id: pack.id,
        uuid: pack.uuid,
        originalPrice: pack.original_price,
        currentPrice: pack.current_price,
        unities: pack.unities,
      }))
    }))
  }
);

export default fetchProducts;
