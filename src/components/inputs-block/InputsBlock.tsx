import React, {useEffect} from "react";

import {Input} from "../input/Input";
import {useAppDispatch} from "../../hooks/ReduxHooks";
import {setError} from "../../redux/count-slice";

import './InputsBlock.css';

type InputsBlockPropsType = {
  error: boolean
  maxValue: number
  minValue: number
  setMinValue: (minValue: number) => void
  setMaxValue: (maxValue: number) => void
}

export const InputsBlock:React.FC<InputsBlockPropsType> = (props) => {
  const {error, maxValue, minValue, setMinValue, setMaxValue} =props
  const dispatch = useAppDispatch()

  const updateError = (error: boolean) => {
    dispatch(setError({error}))
  }

  useEffect(() => {
    if (minValue >= maxValue || minValue < 0 || maxValue < 0) {
      updateError(true)

    } else {
      updateError(false)
    }
  }, [minValue, maxValue]);

  return (
    <div className={'set-count-screen'}>
      <Input className={'max-value'} title={'max value: '} error={error} value={maxValue} setValue={setMaxValue}/>
      <Input className={'start-value'} title={'start value: '} error={error} value={minValue} setValue={setMinValue}/>
    </div>
  )
}
