import React, {useEffect} from 'react';

import {Count} from "./components/count/Count";
import {SetCount} from "./components/set-count/SetCount";
import {useAppDispatch, useAppSelector} from "./hooks/ReduxHooks";
import {loadLS} from "./redux/count-slice";

import './App.css';

export const App: React.FC = () => {
  const {editMode} = useAppSelector(state => state.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadLS())
  }, [dispatch])

  return (
    <div className="App">
      {
        editMode ?
          <SetCount/>
          :
          <Count/>
      }
    </div>
  );
}
