import React from "react";

import './Button.css';

type ButtonPropsType = {
  title: string
  disabledButton: boolean
  onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
  let {title, disabledButton, onClick} = props
  return (
    <button
      onClick={onClick} disabled={disabledButton}
      className={disabledButton ? 'button button-disabled' : 'button'}>{title}</button>
  )
}
