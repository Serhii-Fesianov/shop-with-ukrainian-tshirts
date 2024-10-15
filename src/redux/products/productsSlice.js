import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './operations'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
    .addCase(fetchProducts.pending, (state, action) => {
      state.loading = true
      state.error = false
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.items = action.payload
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false 
      state.error = true
  })}
})

export default productSlice.reducer