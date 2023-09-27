import React from "react";

import {Button} from "../button/Button";

import './CountButtons.css';

type CountButtonsPropsType = {
  maxValue: number
  minValue: number
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  error: boolean
  setEditModeSetCount: (editModeSetCount: boolean) => void
}

export const CountButtons: React.FC<CountButtonsPropsType> = (props) => {
  let {count, maxValue, minValue, setCount, error, setEditModeSetCount} = props

  const onClickIncrease = () => {
    setCount((prevCount: number) => prevCount + 1);
  }

  const onClickReset = () => {
    setCount(minValue)
  }

  const onSetCallback = () => {
    setEditModeSetCount(true)
  }
  console.log(count <= maxValue)
  return (
    <div className={'count-button'}>
      <Button title={'inc'} onClick={onClickIncrease} disabledButton={count >= maxValue || error}/>
      <Button title={'reset'} onClick={onClickReset} disabledButton={count === minValue || error}/>
      <Button title={'set'} onClick={onSetCallback} disabledButton={error}/>
    </div>
  )
}
