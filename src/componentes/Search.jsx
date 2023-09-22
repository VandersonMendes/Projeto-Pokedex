import React, { useState } from 'react'
import styles from "../assets/css/Seach.module.css";
import { useAppProvider } from '../context/ContextApp';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const {setValuePokemon} = useAppProvider();
  const navigate = useNavigate()
  const [value, setValue] = useState();
  function handleChange({target}){
     setValue(target.value)
  }
    function handleSubmit(e) {
      e.preventDefault();
      navigate('/')
      setValuePokemon(['pokemon/'+value])
    }
 
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className={styles.form}>
            <input type="text"  onChange={handleChange} placeholder='Digite o nome do pokemon ou id' required />
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default Search