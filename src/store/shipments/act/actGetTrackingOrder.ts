import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios } from 'axios';
import { AxiosErrorHandler } from "../../../utils";

const actGetTrackingOrder = createAsyncThunk(
  "shipments/actGetTrackingOrder",
  async (trackingNumber: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `${trackingNumber}`,
      );
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default actGetTrackingOrder;