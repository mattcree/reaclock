import { createReducer, PayloadAction } from "typesafe-actions";
import { State } from "../store/store";
import { updateCurrentTime, ClockAction } from "./actions";

const updateCurrentTimeHandler = (state: State, action: PayloadAction<ClockAction, Date>) => ({...state, currentTime: action.payload});

export const clockReducers = createReducer({currentTime: new Date()} as State).handleAction(updateCurrentTime, updateCurrentTimeHandler)
