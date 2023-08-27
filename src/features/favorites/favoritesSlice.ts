import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
};

export interface FavoritesState {
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

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: (initState.favorites || { products: [] }) as FavoritesState,
  reducers: {
    addProductToFavorites: (state: { products: Product[] }, action: PayloadAction<Product>) => {
      const foundProduct = state.products.find(product => product.id === action.payload.id);
      if (!foundProduct) {
        state.products = [...state.products, action.payload];
      }
    },
    deleteProductFromFavorites: (state: { products: Product[] }, action: PayloadAction<Product['id']>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

export const { addProductToFavorites, deleteProductFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
