import React, { useEffect, useState } from "react"
import styles from "../assets/css/Modal.module.css"
import { useAppProvider } from "../context/ContextApp";
import { API_BASE, getPokemon } from "../api";
import axios from "axios";
const Modal = ({ data }) => {
    const { setModal } = useAppProvider();
    function hadleOutsideClick(event) {
        if (event.target === event.currentTarget) setModal(false);
    }
    const [weakness, setWeakness] = useState(null);
    useEffect(() =>{
        getWeakness()
    },[data])
    async function getWeakness() {
        await data && axios.get(data.types[0].type.url).then((resp) => setWeakness(resp.data))
      }
    return (
        <div key="adfas" className={`${styles.containerModal} ${styles.animeTop}`} onClick={hadleOutsideClick}>
            {data &&
                <div className={styles.modal}>
                    <button className={styles.exit} onClick={() => setModal(false)}>X</button>
                    <span className={styles.id}>#{data.id}</span>
                    <div className={styles.img}>
                        <img src={data.sprites.other.dream_world.front_default} alt={data.id} />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            <h1 className={styles.name}>{data.name}</h1>
                        </div>
                        {data.types && data.types.length === 2 ? (
                            <div className={styles.typeFlex}>
                                <span>{data.types[0].type.name}</span >
                                <span>{data.types[1].type.name}</span>
                            </div>
                        ) : (
                            <div className={styles.typeFlex}><span>{data.types[0].type.name}</span></div>
                        )}
                        <div className={styles.abilities}>
                            <h2>Habilidades</h2>
                            <div className={styles.abilitiesFlex}>
                                {data && data.abilities.map((ability) =>(
                                    <span>{ability.ability.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className={styles.weakness}>
                            <h2>Fraquezas</h2>
                            <div className={styles.weaknessFlex}>
                                {weakness && weakness.damage_relations.double_damage_from.map((weaknes) =>(
                                    <span>{weaknes.name}</span>
                                ))}
                            </div>
                        </div>
                  <div>
                      <ul className={styles.stats}>
                        { data.stats && data.stats.map((stat) => (
                          <li key={stat.stat.name}>
                            <p className={`${styles.statsName}`}>
                              {stat.stat.name}
                            </p>
                            <div className={styles.progress}>
                              <div className={styles.progressWidth} style={{width:`${stat.base_stat}%`}}></div>
                            </div>
                          </li>
                        ))}
                      </ul>
                  </div>
                    </div>
                </div>
                }

        </div>
    )
}
export default Modal