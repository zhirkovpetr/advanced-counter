import React from "react";

import {Button} from "../button/Button";
import {InputsBlock} from "../inputs-block/InputsBlock";

import './SetCount.css';

type SetCountPropsType = {
  minValue: number
  maxValue: number
  setMinValue: (minValue: number) => void
  setMaxValue: (maxValue: number) => void
  setCount: (count: number) => void
  setError: (error: boolean) => void
  setEditModeSetCount: (editModeSetCount: boolean) => void
  error: boolean
}

export const SetCount: React.FC<SetCountPropsType> = (props) => {
  const {minValue, maxValue, setMinValue, setMaxValue, setCount,error, setError, setEditModeSetCount} = props

  const onSetValue = () => {
    setEditModeSetCount(false)
    setMinValue(minValue)
    setMaxValue(maxValue)
    setCount(minValue)
  }

  return (
    <div className={'set-count-block'}>
      <InputsBlock
        minValue={minValue} maxValue={maxValue} setError={setError} setMinValue={setMinValue} setMaxValue={setMaxValue}
        error={error}/>
      <div className={'set-count-button'}>
        <Button
          title={'set'} onClick={onSetValue}
          disabledButton={error || minValue === maxValue || minValue < 0 || maxValue < 0 || minValue > maxValue}/>
      </div>
    </div>
  )
}
