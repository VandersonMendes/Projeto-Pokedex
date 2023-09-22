import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [valuePokemon, setValuePokemon] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState();
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState(null)
  const [pokemonID, setPokemonID] = useState(null);
  const [type, setType] = useState(null);
  const [valuePokemonType, setValuePokemonType ] = useState(null)
  const[todos, setTodos] = useState(null)

  return (
    <AppContext.Provider value={{ loading, setLoading, setValuePokemon, valuePokemon, error, setError, page, setPage, totalPages, setTotalPages, pokemons, setPokemons, pokemonID, setPokemonID, setType, type, valuePokemonType, setValuePokemonType, todos, setTodos}}>
      {children}
    </AppContext.Provider>
  );
}
  
export function useAppProvider() {
  const context = useContext(AppContext);
  return context;
}


