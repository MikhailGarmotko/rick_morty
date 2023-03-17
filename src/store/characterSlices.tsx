import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  characters: []
};

export const charactersSlice = createSlice({
  initialState,
  name: 'charactersSlice',
  reducers: {
    setCharacters: (state, action:PayloadAction<any>) => {
      const characters = action.payload.results;
      state.characters = characters.slice(0,8);
    },
  }
});

export const { setCharacters} = charactersSlice.actions;
export default charactersSlice.reducer;
