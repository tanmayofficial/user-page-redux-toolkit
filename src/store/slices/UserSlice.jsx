import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      console.log("action: ", action.payload);
      state.push(action.payload);
    },
    removeUser(state, action) {
      console.log("first action: ", action.payload);
      console.log("first state: ", state);
      state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      return [];
    },
  },
});
console.log("userSlice: ", userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
