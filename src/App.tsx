import React, {useEffect, useState} from 'react';

import {Count} from "./components/count/Count";
import {SetCount} from "./components/set-count/SetCount";

import './App.css';

export const App: React.FC = () => {
  let [minValue, setMinValue] = useState<number>(0)
  let [maxValue, setMaxValue] = useState<number>(5)
  let [count, setCount] = useState<number>(0)
  let [error, setError] = useState<boolean>(false)
  let [editModeSetCount, setEditModeSetCount] = useState<boolean>(false)

  useEffect(() => {
    let minValue = localStorage.getItem("minValue")
    if (minValue) {
      let minValueLS = JSON.parse(minValue)
      setMinValue(minValueLS)
    }
  }, [])

  useEffect(() => {
    let maxValue = localStorage.getItem("maxValue")
    if (maxValue) {
      let maxValueLS = JSON.parse(maxValue)
      setMaxValue(maxValueLS)
    }
  }, [])

  useEffect(() => {
    let count = localStorage.getItem("count")
    if (count) {
      let countLS = JSON.parse(count)
      setCount(countLS)
    }
  }, [])

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
