import axios from "axios";
export const API_BASE = 'https://pokeapi.co/api/v2/';
export const getPokemon = async (url) => {
    try {
        const  response = await axios.get(API_BASE+url);
        return  await response;
    } catch (error) {
        console.log("error: ", error)
    }
}


export const getPokemons = async (limit, offset) => {
    try {
      const  response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        return response;

    } catch (error) {
        console.log("error: ", error)
    }
}


