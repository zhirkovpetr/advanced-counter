import React, {ChangeEvent} from "react";

import './Input.css';

type InputPropsType = {
  error: boolean
  value: number
  setValue: (value: number) => void
  className: string
  title: string
}

export const Input:React.FC<InputPropsType> = (props) => {
  let {error, setValue, className, title, value} =props

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.currentTarget.value))
    }

    return (
    <div className={className}>
      <span>{title}</span>
      <input className={error ? 'input-error' : 'start-value-input'} type={'number'} value={value} onChange={onChangeValue}/>
      {error && <div style={{color: "red"}}>Incorrect value entered!</div>}
    </div>
  )
}
