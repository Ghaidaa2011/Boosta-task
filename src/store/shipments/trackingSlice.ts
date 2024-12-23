import { createSlice } from '@reduxjs/toolkit';
import actGetTrackingOrder from './act/actGetTrackingOrder';
import { IOrder, isString, TLoading } from '../../types';

interface ITrackingSlice {
  response: IOrder | null;
  loading: TLoading;
  error: string | null;
}

const initialState: ITrackingSlice = {
  response: null,
  loading: "idle",
  error: null,
};

const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetTrackingOrder.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetTrackingOrder.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.response = action.payload;
      })
    builder.addCase(actGetTrackingOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export default trackingSlice.reducer;
export { actGetTrackingOrder };
