// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   data: [1, 2, 3, 4, 5],
//   loading: true,
//   errors: "",
// };

// const fetchData = createAsyncThunk("fetchUser", async () => {
//   const response = await axios.get("url");
//   return response.data;
// });

// const someSlice = createSlice({
//   name: "someSlice",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchData.pending, (state, action) => {
//         state.loading = true
//         state.errors = ''
//     });
//     builder.addCase(fetchData.fulfilled, (state, action) => {
//       state.loading = false;
//     });
//     builder.addCase(fetchData.rejected, (state, action) => {
//       state.loading = false;
//       state.errors = 'Error fetching data'
//     });
//   },
// });

// export default someSlice.reducer;
// export const {} = someSlice.actions;
