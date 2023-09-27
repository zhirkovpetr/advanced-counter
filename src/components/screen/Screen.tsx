import React from "react";

import './Screen.css';

type ScreenPropsType = {
  error: boolean
  count: number
  maxValue: number
}

export const Screen: React.FC<ScreenPropsType> = (props) => {
  const {error, maxValue, count} = props
  return (
    <div className={'count-screen'}>
      <div className={'value'}>
        {error ? <span>error</span> : <span className={count === maxValue ? 'active' : ''}>{count}</span>}
      </div>
    </div>
  )
}
