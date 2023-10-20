import React from 'react';

import {Count} from "./components/count/Count";
import {SetCount} from "./components/set-count/SetCount";

import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/ReduxHooks";
import {setCount, setEditMode} from "./redux/count-slice";

export const App: React.FC = () => {
  const {counter} = useAppSelector(state => state.countSlice)
  const dispatch = useAppDispatch()

/*  useEffect(() => {
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
  }, [])*/

/*  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
  }, [minValue])

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [maxValue])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])*/



  const updateCount = (count: number) => {
    dispatch(setCount({count}))
  }

  const updateEditModeSetCount = (editMode: boolean) => {
    dispatch(setEditMode({editMode}))
  }

  return (
    <div className="App">
      {
        counter.editMode ?
          <SetCount
            setCount={updateCount}
            setEditModeSetCount={updateEditModeSetCount}
          />
          :
          <Count
            setCount={updateCount}
            setEditModeSetCount={updateEditModeSetCount}
          />
      }
    </div>
  );
}
