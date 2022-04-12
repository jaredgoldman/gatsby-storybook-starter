import React, { useState } from "react"
import { TextField } from "@mui/material"
import { Button, Box, MenuItem, La } from "@mui/material"
import styles from "./Form.module.scss"

export default function Form({
  fields,
  label,
  description,
  handleClick,
  variant,
  buttonLabel,
}) {
  const formFields = fields.map(field => {
    const { type, label, selectOptions } = field
    if (type === "text") {
      return (
        <div className={styles.field}>
          <TextField label={label} variant={variant} />
        </div>
      )
    }
    if (type === "password") {
      return (
        <div className={styles.field}>
          <TextField label={label} variant={variant} type={type} />
        </div>
      )
    }
    if (type === "textArea") {
      return (
        <div className={styles.field}>
          <TextField label={label} variant={variant} multiline rows={4} />
        </div>
      )
    }
    if (type === "select") {
      const [option, setOption] = useState(selectOptions[0])
      const handleChange = event => {
        setOption(event.target.value)
      }
      return (
        <div className={styles.field}>
          <TextField
            label={label}
            variant={variant}
            select
            onChange={handleChange}
            // value={option}
          >
            {selectOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      )
    }
  })

  return (
    <Box
      className={styles.root}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
    >
      <h1 className={styles.label}>{label}</h1>
      <div className={styles.description}>{description}</div>
      <form>
        <div className={styles.fields}>{formFields}</div>
        <div className={styles.buttonContainer}>
          <Button onClick={handleClick}>{buttonLabel}</Button>
        </div>
      </form>
    </Box>
  )
}
