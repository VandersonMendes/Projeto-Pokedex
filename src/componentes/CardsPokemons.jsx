import { useAppProvider } from '../context/ContextApp';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../assets/css/CardsPokemons.module.css"
import Pagination from './Pagination';
import {Link } from 'react-router-dom';
import 'animate.css';
import Loading from './Loading';
import pokemonBola from "../assets/img/pokemonBola.png"
import IconClosed from "../assets/img/closed.svg"
import iconPokemon from "../assets/img/iconPokemon.svg"
import ICONtodos from "../assets/img/todos.svg"
import ICONnormal from "../assets/img/normal.svg"
import ICONgrass from "../assets/img/grass.svg"
import ICONfighting from "../assets/img/fighting.svg"
import ICONflying from "../assets/img/flying.svg"
import ICONpoison from "../assets/img/poison.svg"
import ICONghost from "../assets/img/ghost.svg"
import ICONbug from "../assets/img/bug.svg"
import ICONground from "../assets/img/ground.svg"
import ICONsteel from "../assets/img/steel.svg"
import ICONfire from "../assets/img/fire.svg"
import ICONwater from "../assets/img/water.svg"
import ICONelectric from "../assets/img/electric.svg"
import ICONpsychic from "../assets/img/psychic.svg"
import ICONice from "../assets/img/ice.svg"
import ICONdragon from "../assets/img/dragon.svg"
import ICONdark from "../assets/img/dark.svg"
import ICONfairny from "../assets/img/fairy.svg"
import ICONrock from "../assets/img/rock.svg"
const CardsPokemons = () => {
  const { loading, setValuePokemonType, pokemons, setTodos } = useAppProvider()
  const[ menuMobile, setMenuMobile] = useState(false)
  const [count, setCount] = useState(null);

  useEffect(() => {
    axios.get(' https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then((resp) => setCount(resp.data.count))
  }, [])

  if (loading) return <Loading />
  const typeSelect = (type) => {
    switch (type) {
      case 'normal':
        return "#a6a877c7";
        break;
      case 'grass':
        return "#54b527bd";
        break;
      case 'ground':
        return "#dfbf68";
        break;
      case 'fighting':
        return "#ee7f30c6";
        break;
      case 'rock':
        return "#b8a037c3";
        break;
      case 'steel':
        return "#b9b7cfb9";
        break;
      case 'fire':
        return "#bf2f28f9";
        break;
      case 'electric':
        return "#f7cf30cc";
        break;
      case 'flying':
        return "#a98ff0";
        break;
      case 'psychic':
        return "#f85687";
        break;
      case 'bug':
        return "#a8b720";
        break;
      case 'dragon':
        return "#6f38f6";
        break;
      case 'water':
        return "#678fee";
        break;
      case 'ice':
        return "#98d5d6";
        break;
      case 'poison':
        return "#a03fa0";
        break;
      case 'dark':
        return "#3d3d3d";
        break;
      case 'ghost':
        return "#6e5896";
        break;
      case 'fairy':
        return "#feaec7";
        break;
    }
  }
if(pokemons && pokemons[0] === undefined) return false;
  return (
    <section className='container'>
      <div className={styles.sectionGrid}>
        <article className={`navBar ${menuMobile ? 'open' : ''}`}>
          <nav className={styles.navBar}>
          <div className={styles.closed} onClick={() => setMenuMobile(false)}>
          <img src={IconClosed} alt="IconClosed" />
          </div>
          <li >
              <button onClick={() => setTodos(true)}>
                <img src={ICONtodos} alt="pokemonTypes" />
                <span>Todos</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONnormal} alt="pokemonTypes" />
                <span>Normal</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONfighting} alt="pokemonTypes" />
                <span>Fighting</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONflying} alt="pokemonTypes" />
                <span>Flying</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONpoison} alt="pokemonTypes" />
                <span>Poison</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONground} alt="pokemonTypes" />
                <span>Flying</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONrock} alt="pokemonTypes" />
                <span>Rock</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONbug} alt="pokemonTypes" />
                <span>Bug</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONghost} alt="pokemonTypes" />
                <span>Ghost</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONsteel} alt="pokemonTypes" />
                <span>Steel</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONfire} alt="pokemonTypes" />
                <span>Fire</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONwater} alt="pokemonTypes" />
                <span>Water</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONgrass} alt="pokemonTypes" />
                <span>Grass</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONelectric} alt="pokemonTypes" />
                <span>Electric</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONpsychic} alt="pokemonTypes" />
                <span>psychic</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONice} alt="pokemonTypes" />
                <span>Ice</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONdragon} alt="pokemonTypes" />
                <span>Dragon</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONdark} alt="pokemonTypes" />
                <span>Dark</span>
              </button>
            </li>
            <li >
              <button onClick={(event) => setValuePokemonType(["type/" + event.currentTarget.children[1].textContent.toLocaleLowerCase()])}>
                <img src={ICONfairny} alt="pokemonTypes" />
                <span>Fairy</span>
              </button>
            </li>
          </nav>
        </article>
        <aside>
          <div className={styles.flexNav}>
            <div className={styles.menuMobile} onClick={() => setMenuMobile(!menuMobile)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.count}>
              <img src={iconPokemon} alt="icone pokemon" />
              <h1>{count && count}</h1>
            </div>
          </div>
          <ol className={styles.grid}>
            {pokemons && pokemons
              .map((pokemon) => (
                <Link to={`/cardPokemon/${pokemon.data.name}`} key={pokemon.data.id}>
                  <li key={pokemon.data.name} className={styles.card} onClick={() => {
                    window.localStorage.setItem('idPokemon', 'pokemon/' + pokemon.data.id)
                  }}>
                    <span className={styles.id}>#{pokemon.data.id}</span>
                    <div className={styles.img} >
                      {pokemon.data.sprites.other.dream_world.front_default ? (
                        <img src={pokemon.data.sprites.other.dream_world.front_default} alt={pokemon.data.id} style={{ backgroundColor: typeSelect(pokemon.data.types[0].type.name) }} />
                      ) : (
                        <img src={pokemonBola} alt={pokemon.data.id} style={{ backgroundColor: typeSelect(pokemon.data.types[0].type.name) }}></img>
                      )}

                    </div>
                    <div className={styles.texto}>
                      <h1>{pokemon.data.name}</h1>
                    </div>
                  </li>
                </Link>
              ))}
          </ol>
        </aside>
      </div>
      <Pagination />

    </section>
  )
}
export default CardsPokemons;
