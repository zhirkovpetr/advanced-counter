import React from "react";

import {Button} from "../button/Button";
import {InputsBlock} from "../inputs-block/InputsBlock";
import {setMaxValue, setMinValue} from "../../redux/count-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";

import './SetCount.css';

type SetCountPropsType = {
  setCount: (count: number) => void
  setEditModeSetCount: (editModeSetCount: boolean) => void
}

export const SetCount: React.FC<SetCountPropsType> = (props) => {
  const {setCount, setEditModeSetCount} = props
  const {minValue, maxValue, error,} = useAppSelector(state => state.countSlice.counter)
  const dispatch = useAppDispatch()

  const updateMinValue = (minValue: number) => {
    dispatch(setMinValue({minValue}))
  }

  const updateMaxValue = (maxValue: number) => {
    dispatch(setMaxValue({maxValue}))
  }

  const onSetValue = () => {
    setEditModeSetCount(false)
    updateMinValue(minValue)
    updateMaxValue(maxValue)
    setCount(minValue)
  }

  return (
    <div className={'set-count-block'}>
      <InputsBlock setMinValue={updateMinValue} setMaxValue={updateMaxValue}
        minValue={minValue} maxValue={maxValue} error={error}/>
      <div className={'set-count-button'}>
        <Button
          title={'set'} onClick={onSetValue}
          disabledButton={error || minValue === maxValue || minValue < 0 || maxValue < 0 || minValue > maxValue}/>
      </div>
    </div>
  )
}
