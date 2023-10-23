import React from "react";

import {useAppSelector} from "../../hooks/ReduxHooks";

import './Screen.css';

export const Screen: React.FC = () => {
  const {count, maxValue, error} = useAppSelector(state => state.count)
  return (
    <div className={'count-screen'}>
      <div className={'value'}>
        {error ? <span>error</span> : <span className={count === maxValue ? 'active' : ''}>{count}</span>}
      </div>
    </div>
  )
}
