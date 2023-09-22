import React, { useEffect, useState } from "react";
import CardsPokemons from "./CardsPokemons";
import Loading from "./Loading";
import {getPokemons, getPokemon } from "../api";
import { useAppProvider } from "../context/ContextApp";
import Error from "./Error";
import axios from "axios";
const Home = () => {
    const { loading, setLoading, valuePokemon, setError, error, page, setPokemons, valuePokemonType, todos,setTodos} = useAppProvider();
    const [listPokemons, setListPokemons] = useState(null)
    console.log(listPokemons)
    React.useEffect(() => {
        setLoading(true);
        getPokemonSearch();
        setLoading(false);
    }, [valuePokemon]);
    const getPokemonSearch = async ()=>{
        try{
            const data = await  valuePokemon.map((search) => search === undefined ? null : getPokemon(search)); 
            const result = await Promise.all(data);
            if(result[0] === undefined) return null
            setPokemons(result)
           setListPokemons(result)
            setError(false);
        }catch(err){
            setError(true);
        }finally{
            setError(false);
        }
    }
    React.useEffect(() => {
        fetchPokemons()
        setTodos(false)
    }, [page, todos])
    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(9, 7 * page);
            const promises= data.data.results.map(async (pokemon) => {
                return await getPokemon('pokemon/'+pokemon.name);
            })
            const results = await Promise.all(promises);
            setPokemons(results)
            setListPokemons(results)
            setLoading(false);
            setError(false);
        } catch (error) {
            console.log("fetchPokemons error: ", error);
            setLoading(false);
            setError(true);
        }
    };
    const fetchPokemonsType = async () =>{
        try{
        setLoading(true);
        setError(false)
        console.log(valuePokemonType)
        const data = await valuePokemonType && valuePokemonType.map((search) => getPokemon(search)); 
        const response = await  Promise.all(data)
        const result = response && response[0].data.pokemon.map((resp) =>axios.get(resp.pokemon.url).then((resp) =>  {
            return resp
        }))
        const resultsFinal = await Promise.all(result)
        setPokemons(resultsFinal)
        setListPokemons(resultsFinal)
        setLoading(false);
    }catch(err){
        console.log("Error" + err)
    }
    }    
    useEffect(() =>{
        fetchPokemonsType()
    },[valuePokemonType])
    if (loading) return <Loading />
    if (error) return <Error error="Error 404 [ Pagina não encontrada ]" />
    return (
        <div className="animeLeft">
            <CardsPokemons />
        </div>

    )


}
export default Home;