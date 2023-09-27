import React from "react";

import {Screen} from "../screen/Screen";
import {CountButtons} from "../count-buttons/CountButtons";

import './Count.css';

type CountPropsType = {
  maxValue: number
  minValue: number
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  error: boolean
  setEditModeSetCount: (editModeSetCount: boolean) => void
}

export const Count: React.FC<CountPropsType> = (props) => {
  let {count, maxValue, minValue, setCount, error, setEditModeSetCount} = props

  return (
    <div className={'count-block'}>
      <Screen count={count} maxValue={maxValue} error={error}/>
      <CountButtons count={count} setCount={setCount} setEditModeSetCount={setEditModeSetCount}  maxValue={maxValue} minValue={minValue} error={error}/>
    </div>
  )
}
