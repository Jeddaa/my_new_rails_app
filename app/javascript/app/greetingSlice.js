import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  greeting: {},
  isLoading: false,
  isError: false
};

const URL = 'http://localhost:3000/api/greetings';
export const fetchGreetings = createAsyncThunk(
  'services/fetchGreetings',
  async () => {
    const response = await axios.get(URL);
    const data = await response;
    console.log('response', data);
    return data;
  }
);


export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.greeting = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default greetingSlice.reducer;

