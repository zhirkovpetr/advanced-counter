import React, {useEffect} from 'react';

import {Count} from "./components/count/Count";
import {SetCount} from "./components/set-count/SetCount";
import {useAppDispatch, useAppSelector} from "./hooks/ReduxHooks";
import {setCount, setEditMode, setStateLS} from "./redux/count-slice";

import './App.css';

export const App: React.FC = () => {
  const {counter} = useAppSelector(state => state.countSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const saveCounter = JSON.parse(localStorage.getItem("counter") as string)
    dispatch(setStateLS(saveCounter ? saveCounter : counter))
  }, [dispatch])

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
