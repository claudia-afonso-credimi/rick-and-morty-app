import React from 'react'
import style from './Error.module.scss'

export const Error: React.FC = () => {
  return (
    <h1 className={style.errorMessage}>Oops! Looks like something went wrong 💩.</h1>
  )
}

export default Error;
