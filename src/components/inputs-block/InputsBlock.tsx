import React, {useEffect} from "react";

import {Input} from "../input/Input";
import {useAppDispatch} from "../../hooks/ReduxHooks";
import {setError, setMaxValue, setMinValue} from "../../redux/count-slice";

import './InputsBlock.css';

type InputsBlockPropsType = {
  error: boolean
  maxValue: number
  minValue: number
}

export const InputsBlock:React.FC<InputsBlockPropsType> = (props) => {
  const {error, maxValue, minValue} =props
  const dispatch = useAppDispatch()

  const updateError = (error: boolean) => {
    dispatch(setError({error}))
  }

  const updateMinValue = (minValue: number) => {
    dispatch(setMinValue({minValue}))
  }

  const updateMaxValue = (maxValue: number) => {
    dispatch(setMaxValue({maxValue}))
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
      <Input className={'max-value'} title={'max value: '} error={error} value={maxValue} setValue={updateMaxValue}/>
      <Input className={'start-value'} title={'start value: '} error={error} value={minValue} setValue={updateMinValue}/>
    </div>
  )
}
