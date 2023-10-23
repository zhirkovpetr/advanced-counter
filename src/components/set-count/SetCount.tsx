import React from "react";

import {Button} from "../button/Button";
import {InputsBlock} from "../inputs-block/InputsBlock";
import {saveLS} from "../../redux/count-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";

import './SetCount.css';

export const SetCount: React.FC = () => {
  const {minValue, maxValue, error, editMode} = useAppSelector(state => state.count)
  const dispatch = useAppDispatch()

  const onSetValue = () => {
    dispatch(saveLS({minValue, maxValue, error, editMode, count: minValue}))
  }

  return (
    <div className={'set-count-block'}>
      <InputsBlock minValue={minValue} maxValue={maxValue} error={error}/>
      <div className={'set-count-button'}>
        <Button
          title={'set'} onClick={onSetValue}
          disabledButton={error || minValue === maxValue || minValue < 0 || maxValue < 0 || minValue > maxValue}/>
      </div>
    </div>
  )
}
