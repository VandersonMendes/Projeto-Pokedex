import React, { useEffect, useState } from "react";
import { useAppProvider } from "../context/ContextApp";
import styles from "../assets/css/CardPokemon.module.css";
import { getPokemon } from "../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
const CardPokemon = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(undefined);
  const {setError, setLoading, loading } = useAppProvider();
  const idPokemon = window.localStorage.getItem("idPokemon");
  const [weakness, setWeakness] = useState(null);
  const [caracteristicas, setCaracteristicas] = useState(true);
  const [statistics, setStatistic] = useState(null);
  useEffect(() => {
    getPokemonID();
  }, [idPokemon]);
  const getPokemonID = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(idPokemon);
      setPokemon(data.data);
      console.log(data.data);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
      console.log("ERRO" + err);
    } finally {
      setError(false);
    }
  };
  useEffect(() => {
    // Função onde está puxando a url (pokemon.types[0].type.url), e está dando uma resposta onde pega a fraqueza do pokemon
    async function getWeakness() {
      setLoading(true);
      pokemon &&
        axios
          .get(pokemon.types[0].type.url)
          .then((resp) => setWeakness(resp.data));
      setLoading(false);
    }
    getWeakness();
  }, [pokemon]);
  const typeSelect = (type) => {
    switch (type) {
      case "normal":
        return "#a6a877";
        break;
      case "grass":
        return "#77c850";
        break;
      case "ground":
        return "#dfbf68";
        break;
      case "fighting":
        return "#ee7f30";
        break;
      case "rock":
        return "#b8a137";
        break;
      case "steel":
        return "#b9b7cf";
        break;
      case "fire":
        return "#bf3028";
        break;
      case "electric":
        return "#f7cf30";
        break;
      case "flying":
        return "#a98ff0";
        break;
      case "psychic":
        return "#f85687";
        break;
      case "bug":
        return "#a8b720";
        break;
      case "dragon":
        return "#6f38f6";
        break;
      case "water":
        return "#678fee";
        break;
      case "ice":
        return "#98d5d6";
        break;
      case "poison":
        return "#a03fa0";
        break;
      case "dark":
        return "#525251";
        break;
      case "ghost":
        return "#6e5896";
        break;
      case "fairy":
        return "#feaec7";
        break;
    }
  };
  if(loading) return <Loading/>
  console.log(loading)
  return (
    <section className="container">
      {pokemon && (
        <div className={`${styles.flexCard} ${"animeLeft"}`}>
          <h2
            className={styles.id}
            style={{
              backgroundColor:
                pokemon && typeSelect(pokemon.types[0].type.name),
            }}
          >
            #{pokemon.id}
          </h2>
          <div
            className={styles.imgPok}
            style={{
              backgroundColor:
                pokemon && typeSelect(pokemon.types[0].type.name),
            }}
          >
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.id}
            />
          </div>
          <div className={styles.menuNav}>
            <button
              onClick={() => {
                setStatistic(false);
                setCaracteristicas(true);
              }}
            >
              Caracteristicas
            </button>
            <button
              onClick={() => {
                setCaracteristicas(false);
                setStatistic(true);
              }}
            >
              Estastísticas
            </button>
          </div>
          {caracteristicas && (
            <div className={`${styles.text} ${'animeLeft'}`}>
              <div>
                <h1 className={styles.name}>{pokemon.name}</h1>
                {pokemon && pokemon.types.length === 2 ? (
                  <ol className={styles.type}>
                    <li
                    key={pokemon.types[0].type.name}
                      style={{
                        backgroundColor:
                          pokemon && typeSelect(pokemon.types[0].type.name),
                      }}
                    >
                      {pokemon.types[0].type.name}
                    </li>
                    <li
                      style={{
                        backgroundColor:
                          pokemon && typeSelect(pokemon.types[1].type.name),
                      }}
                    >
                      {pokemon.types[1].type.name}
                    </li>
                  </ol>
                ) : (
                  <ol className={styles.type}>
                    <li
                     key={pokemon.types[0].type.name}
                      style={{
                        backgroundColor: typeSelect(pokemon.types[0].type.name),
                      }}
                    >
                      {pokemon.types[0].type.name}
                    </li>
                  </ol>
                )}
              </div>
              <div>
                <h2>Habilidades</h2>
                <ol className={styles.skills}>
                  {pokemon.abilities &&
                    pokemon.abilities.map((skill) => (
                      <li key={skill}>{skill.ability.name}</li>
                    ))}
                </ol>
              </div>
              <div>
                <h2>Fraquezas</h2>
                <ol className={styles.weakness}>
                  {weakness &&
                    weakness.damage_relations.double_damage_from.map((item) => (
                      <li key={item}>{item.name}</li>
                    ))}
                </ol>
              </div>
            </div>
          )}
          {statistics && (
             <ul className={`${styles.stats} ${styles.animeBottom} `}>
                    {pokemon && pokemon.stats.map((stat) => (
                      <li key={stat.stat.name}>
                        <p className={`${styles.statsName}`}>
                          {stat.stat.name}
                        </p>
                        <div className={styles.progress}>
                          <div className={styles.progressWidth} style={ pokemon && {width:`${stat.base_stat}%`, background:`${typeSelect(pokemon.types[0].type.name)}`}}></div>
                        </div>
                      </li>
                    ))}
                  </ul>
          )}
        </div>
      )}
      <button onClick={() => navigate("/")} className={styles.buttonBack}>
        Voltar
      </button>
    </section>
  );
};

export default CardPokemon;
