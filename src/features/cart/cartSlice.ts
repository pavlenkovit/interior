import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  count: number;
};

export interface CartState {
  products: Product[];
}

const getStateFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem('reduxState');
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

const initState = getStateFromLocalStorage();

export const cartSlice = createSlice({
  name: 'cart',
  initialState: (initState?.cart || { products: [] }) as CartState,
  reducers: {
    addProduct: (state: CartState, action: PayloadAction<Omit<Product, 'count'>>) => {
      const foundProduct = state.products.find(product => product.id === action.payload.id);
      if (!foundProduct) {
        state.products = [...state.products, { ...action.payload, count: 1 }];
      } else {
        state.products = state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              count: product.count + 1,
            };
          }
          return product;
        });
      }
    },
    changeProductCount: (state: CartState, action: PayloadAction<{ id: Product['id']; count: number }>) => {
      state.products = state.products.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            count: action.payload.count,
          };
        }
        return product;
      });
    },
    deleteProduct: (state: CartState, action: PayloadAction<Product['id']>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    clearProducts: (state: CartState) => {
      state.products = [];
    },
  },
});

export const { addProduct, deleteProduct, changeProductCount, clearProducts } = cartSlice.actions;
export default cartSlice.reducer;
