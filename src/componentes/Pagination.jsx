import React from 'react'
import styles from "../assets/css/Pages.module.css"
import { useAppProvider } from '../context/ContextApp'
const Pagination = () => {
    const {page, setPage} = useAppProvider()

  return (
    <div className={styles.PagesFlex}>
       {page === 0?(
            <button disabled>Página Anterior</button>
        ):(
            <button onClick={() => setPage(page - 1)}>Página Anterior</button>
        ) }
        <button onClick={() => setPage(page + 1)}>Proxima Página</button>
      
    </div>
  )
}

export default Pagination