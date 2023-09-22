import React from 'react'
import HeaderImg from "../assets/img/pokeapi_256.png";
import Search from './Search';
import styles from "../assets/css/Header.module.css"
const Header = ({filteredPokemon}) => {
  return (
    <div className={styles.header}>
        <a href="/"><img src={HeaderImg} alt="Pokedex" /></a>
        <Search filteredPokemon={filteredPokemon} className={styles.Search}></Search>
    </div>
  )
}

export default Header