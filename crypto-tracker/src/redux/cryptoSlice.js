import { createSlice } from '@reduxjs/toolkit';
import cryptoData from '../data/cryptoData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: cryptoData,
  },
  reducers: {
    updateCryptoDataRandomly: (state) => {
      state.assets.forEach(asset => {
        asset.price = +(asset.price * (0.995 + Math.random() * 0.01)).toFixed(2);
        asset.change1h = +(Math.random() * 10 - 5).toFixed(2);
        asset.change24h = +(Math.random() * 10 - 5).toFixed(2);
        asset.change7d = +(Math.random() * 20 - 10).toFixed(2);
        asset.volume24h = Math.floor(asset.volume24h * (0.98 + Math.random() * 0.04));
      });
    },
  },
});

export const { updateCryptoDataRandomly } = cryptoSlice.actions;
export default cryptoSlice.reducer;
