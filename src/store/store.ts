import { createStore, combineReducers } from "redux";
import { clockReducers } from "../clock/reducers";
import { alarmReducers } from "../alarm/reducers";

export type State = {
  currentTime: Date;
  alarmTime: Date;
  isAlarmEnabled: boolean;
}

export type RootState = {
  clock: State
  alarm: State
}

const rootReducer = combineReducers({
  clock: clockReducers,
  alarm: alarmReducers
});

export const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());