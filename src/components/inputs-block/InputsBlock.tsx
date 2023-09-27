import React, {useEffect} from "react";

import {Input} from "../input/Input";

import './InputsBlock.css';

type InputsBlockPropsType = {
  error: boolean
  maxValue: number
  minValue: number
  setMinValue: (minValue: number) => void
  setMaxValue: (maxValue: number) => void
  setError: (error: boolean) => void
}

export const InputsBlock:React.FC<InputsBlockPropsType> = (props) => {
  let {error, maxValue, minValue, setMaxValue, setMinValue, setError} =props

  useEffect(() => {
    if (minValue >= maxValue || minValue < 0 || maxValue < 0) {
      setError(true)

    } else {
      setError(false)
    }
  }, [minValue, maxValue]);

  return (
    <div className={'set-count-screen'}>
      <Input className={'max-value'} title={'max value: '} error={error} value={maxValue} setValue={setMaxValue}/>
      <Input className={'start-value'} title={'start value: '} error={error} value={minValue} setValue={setMinValue}/>
    </div>
  )
}
