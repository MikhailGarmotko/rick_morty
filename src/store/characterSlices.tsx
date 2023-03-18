import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
};

export const filterByName = (characters: any) => {
  return characters.slice(0, characters.length).sort((prev: any, next: any) => {
    let prevName = prev.name.split(" ")[0];
    let nextName = next.name.split(" ")[0];
    if (prevName > nextName) {
      return 1;
    }
    if (prevName < nextName) {
      return -1;
    }
    return 0;
  });
};

export const charactersSlice = createSlice({
  initialState,
  name: "charactersSlice",
  reducers: {
    setCharacters: (state, action: PayloadAction<any>) => {
      const characters = action.payload.results;
      state.characters = filterByName(characters);
    },
  },
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
