import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const fetchRandomPokemon = async () => {
  try {
    const response = await API.get(`/${Math.floor(Math.random() * 1000) + 1}`);
    return response?.data;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
};
