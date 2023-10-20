import React from "react";

import {Button} from "../button/Button";
import {useAppSelector} from "../../hooks/ReduxHooks";

import './CountButtons.css';

type CountButtonsPropsType = {
  setCount: (count: number) => void
  setEditModeSetCount: (editModeSetCount: boolean) => void
}

export const CountButtons: React.FC<CountButtonsPropsType> = (props) => {
  const {setCount, setEditModeSetCount} = props
  const {count, maxValue, minValue, error} = useAppSelector(state => state.countSlice.counter)

  const onClickIncrease = () => {
    setCount(count + 1);
  }

  const onClickReset = () => {
    setCount(minValue)
  }

  const onSetCallback = () => {
    setEditModeSetCount(true)
  }
  return (
    <div className={'count-button'}>
      <Button title={'inc'} onClick={onClickIncrease} disabledButton={count >= maxValue || error}/>
      <Button title={'reset'} onClick={onClickReset} disabledButton={count === minValue || error}/>
      <Button title={'set'} onClick={onSetCallback} disabledButton={error}/>
    </div>
  )
}
