import { createAction } from "typesafe-actions";

export enum ClockAction {
  UPDATE_CURRENT_TIME = "clock/update"
}

export const updateCurrentTime = createAction(ClockAction.UPDATE_CURRENT_TIME)<Date>();