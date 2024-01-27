import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentPokemon: null,
  options: [],
  points: 0,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.currentPokemon = action.payload;
    },
    setOptions: (state, action) => {
      state.options = action.payload;
    },
    increasePoints: (state, action) => {
      state.points += action.payload;
    },
    decreasePoints: (state, action) => {
      state.points -= action.payload;
    },
    resetPoints: state => {
      state.points = 0;
    },
  },
});

export const {
  setPokemon,
  setOptions,
  increasePoints,
  decreasePoints,
  resetPoints,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
