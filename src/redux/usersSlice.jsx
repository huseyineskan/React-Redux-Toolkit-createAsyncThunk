import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //You can use here if there isn't HTTP request
  },
  extraReducers: (builder) => {
    //You can use here if there is HTTP request
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
