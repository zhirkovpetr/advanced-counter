import React, {useEffect, useState} from 'react';

import {Count} from "./components/count/Count";
import {SetCount} from "./components/set-count/SetCount";

import './App.css';

export const App: React.FC = () => {
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [count, setCount] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)
  const [editModeSetCount, setEditModeSetCount] = useState<boolean>(false)

  useEffect(() => {
    const minValue = localStorage.getItem("minValue")
    const maxValue = localStorage.getItem("maxValue")
    const count = localStorage.getItem("count")

    if (minValue) {
      setMinValue(JSON.parse(minValue))
    }
    if (maxValue) {
      setMaxValue(JSON.parse(maxValue))
    }
    if (count) {
      setCount(JSON.parse(count))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
  }, [minValue])

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [maxValue])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  return (
    <div className="App">
      {
        editModeSetCount ?
          <SetCount
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            setCount={setCount}
            error={error}
            setEditModeSetCount={setEditModeSetCount}
            setError={setError}
          />
          :
          <Count
            minValue={minValue}
            maxValue={maxValue}
            count={count}
            setCount={setCount}
            setEditModeSetCount={setEditModeSetCount}
            error={error}
          />
      }
    </div>
  );
}
