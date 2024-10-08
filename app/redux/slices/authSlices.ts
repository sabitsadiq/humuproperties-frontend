import { createSlice } from "@reduxjs/toolkit";

type authType = {
  isSidebarOpen: boolean;
};

const initialState: authType = {
  isSidebarOpen: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});
// console.log(isSidebarOpen);

export const { setOpenSidebar } = authSlice.actions;
export default authSlice.reducer;
