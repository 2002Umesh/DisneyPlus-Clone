import { createSlice } from "@reduxjs/toolkit";
// import { clearAllUsers } from "../actions";

const userSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    addWatchlist(state, action) {
      // if (!state.includes(action.payload)) {
      //     state.push(action.payload);
      //   }

      // state.push(action.payload)
      state.unshift(action.payload);
      console.log(action.payload);
    },
    removeWatchlist(state, action) {
      state.splice(action.payload, 1);
    },
    clearAllWatchlist(state, action) {
      return [];
    },
  },
  //    extraReducers(builder){
  // builder.addCase(clearAllUsers,()=>{
  //     return [];
  // })
  //     }
});

// console.log(userSlice.actions);

export default userSlice.reducer;
export const { addWatchlist, removeWatchlist, clearAllWatchlist } =
  userSlice.actions;
