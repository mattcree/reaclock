import { createReducer, PayloadAction } from "typesafe-actions";
import { State } from "../store/store";
import { setAlarmTime, AlarmAction, setIsAlarmEnabled } from "./actions";

const setAlarmTimeHandler = (state: State, action: PayloadAction<AlarmAction, Date>) => ({...state, alarmTime: action.payload});
const setIsAlarmEnabledHandler = (state: State, action: PayloadAction<AlarmAction, boolean>) => ({...state, isAlarmEnabled: action.payload});

export const alarmReducers = createReducer({alarmTime: new Date(), isAlarmEnabled: false} as State)
  .handleAction(setAlarmTime, setAlarmTimeHandler)
  .handleAction(setIsAlarmEnabled, setIsAlarmEnabledHandler);
