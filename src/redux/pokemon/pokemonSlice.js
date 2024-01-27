import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentPokemon: null,
  options: [],
  points: 0,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
});

export const {} = pokemonSlice.actions;
export default pokemonSlice.reducer;
