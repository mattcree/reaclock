import { createAction } from "typesafe-actions";

export enum AlarmAction {
  SET_ALARM_TIME = "set/alarm_time",
  SET_IS_ALARM_ENABLED = "set/is_alarm_enabled"
}

export const setAlarmTime = createAction(AlarmAction.SET_ALARM_TIME)<Date>();
export const setIsAlarmEnabled = createAction(AlarmAction.SET_IS_ALARM_ENABLED)<boolean>();