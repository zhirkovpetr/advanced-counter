import React from "react";

import {Button} from "../button/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";
import {setCount, setEditMode} from "../../redux/count-slice";

import './CountButtons.css';

export const CountButtons: React.FC = () => {
  const {count, maxValue, minValue, error} = useAppSelector(state => state.count)
  const dispatch = useAppDispatch()

  const updateEditModeSetCount = (editMode: boolean) => {
    dispatch(setEditMode({editMode}))
  }

  const onClickIncrease = () => {
    dispatch(setCount({count: count + 1}))
  }

  const onClickReset = () => {
    dispatch(setCount({count: minValue}))
  }

  const onSetCallback = () => {
    updateEditModeSetCount(true)
  }

  return (
    <div className={'count-button'}>
      <Button title={'inc'} onClick={onClickIncrease} disabledButton={count >= maxValue || error}/>
      <Button title={'reset'} onClick={onClickReset} disabledButton={count === minValue || error}/>
      <Button title={'set'} onClick={onSetCallback} disabledButton={error}/>
    </div>
  )
}
