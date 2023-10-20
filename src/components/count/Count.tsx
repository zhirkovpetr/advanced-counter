import React from "react";

import {Screen} from "../screen/Screen";
import {CountButtons} from "../count-buttons/CountButtons";

import './Count.css';

type CountPropsType = {
  setCount: (count: number) => void
  setEditModeSetCount: (editMode: boolean) => void
}

export const Count: React.FC<CountPropsType> = (props) => {
  const {setCount, setEditModeSetCount} = props

  return (
    <div className={'count-block'}>
      <Screen />
      <CountButtons setCount={setCount} setEditModeSetCount={setEditModeSetCount} />
    </div>
  )
}
