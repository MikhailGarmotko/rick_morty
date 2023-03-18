import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  user:'',
};

export const userProfileSlice = createSlice({
  initialState,
  name: 'userProfileSlice',
  reducers: {
    setUser: (state, action:PayloadAction<any>) => {
      state.user = action.payload;
    },
  }
});

export const { setUser} = userProfileSlice.actions;
export default userProfileSlice.reducer;