import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit"
import { ProductDTO } from "./dto/ProductDTO";

interface ProductState {
  data: ProductDTO[];
  error: Error | null;
  isProcessing: boolean;
}

const initialState: ProductState = {
  data: [],
  error: null,
  isProcessing: false,
}

const SAVE_PRODUCTS = 'product/SAVE_PRODUCTS';
const saveProducts = createAction<Array<ProductDTO>>(SAVE_PRODUCTS);

const productReducer = createReducer(initialState, builder =>
  builder.addCase(saveProducts, (state, action: PayloadAction<Array<ProductDTO>>) => ({
    ...state,
    data: action.payload,
    isProcessing: false,
  }))
)

export default productReducer;
