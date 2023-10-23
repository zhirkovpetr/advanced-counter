import React from "react";

import {Screen} from "../screen/Screen";
import {CountButtons} from "../count-buttons/CountButtons";

import './Count.css';

export const Count: React.FC = () => {

  return (
    <div className={'count-block'}>
      <Screen/>
      <CountButtons />
    </div>
  )
}
