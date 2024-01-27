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
  },
});

export const {setPokemon, setOptions, increasePoints, decreasePoints} =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
