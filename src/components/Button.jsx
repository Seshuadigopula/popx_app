import React from 'react'

export const Button = ({btn_class, btn_text}) => {
  return (
    <button className={btn_class}>
      {btn_text}
    </button>
  )
}
