import React from 'react'
import styles from "../assets/css/Loading.module.css"
const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  )
}

export default Loading