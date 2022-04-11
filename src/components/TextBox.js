import React from "react"
import styles from "./TextBox.Module.scss"

const TextBox = ({ placeholder, theme }) => {
  return (
    <form className={styles[theme]}>
      <input
        className={styles.textBox}
        type="text"
        id="textbox"
        placeholder={placeholder}
      />
      <input type="submit" className={styles.button} />
    </form>
  )
}

export default TextBox
