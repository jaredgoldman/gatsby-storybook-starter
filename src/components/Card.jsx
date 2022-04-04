import React from "react"
import styles from "./Card.module.scss"
import laptop from "../images/laptop.png"

export default function Card({ title, content, buttonLabel, handleClick }) {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.imageContainer}>
          <img src={laptop} alt="laptop" />
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.buttonContainer}>
          <button onClick={handleClick} className={styles.button}>
            {buttonLabel}
          </button>
        </div>
      </div>
    </main>
  )
}
