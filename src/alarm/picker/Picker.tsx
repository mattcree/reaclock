import React, { ChangeEvent, useState } from "react";
import '../Alarm.css';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setAlarmTime, setIsAlarmEnabled } from "../actions";
import { RootState } from "../../store/store";

interface PickerProps {
  isAlarmEnabled: boolean;
  setAlarm: (date: Date) => void;
  disableAlarm: () => void;
}

const oneTo = (range: number) => Array.from(Array(range + 1).keys());

const fromHoursMinutesSeconds = (hours: number, minutes: number, seconds: number) => {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  return date;
};

const mapStateToProps = (state: RootState) => ({
  isAlarmEnabled: state.alarm.isAlarmEnabled
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAlarm: (date: Date) => {
    dispatch(setAlarmTime(date));
    dispatch(setIsAlarmEnabled(true))
  },
  disableAlarm: () => dispatch(setIsAlarmEnabled(false))
});

const Picker: React.FC<PickerProps> = ({isAlarmEnabled, setAlarm, disableAlarm}) => {
  const [selectedHours, setHours] = useState(0);
  const handleHoursChange = (event: ChangeEvent<HTMLSelectElement>) => {
    disableAlarm();
    setHours(parseInt(event.target.value));
  };

  const [selectedMinutes, setMinutes] = useState(0);
  const handleMinutesChange = (event: ChangeEvent<HTMLSelectElement>) => {
    disableAlarm();
    setMinutes(parseInt(event.target.value));
  };

  const [selectedSeconds, setSeconds] = useState(0);
  const handleSecondsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    disableAlarm();
    setSeconds(parseInt(event.target.value));
  };

  return (
    <div>
      <p>HH:MM:SS</p>
      <select id="hours" name="hours" onChange={handleHoursChange}>
        {oneTo(23).map(hour => <option key={hour} value={hour}>{hour}</option>)}
      </select>
      :
      <select id="minutes" name="minutes" onChange={handleMinutesChange}>
        {oneTo(59).map(minute => <option key={minute} value={minute}>{minute}</option>)}
      </select>
      :
      <select id="seconds" name="seconds" onChange={handleSecondsChange}>
        {oneTo(59).map(second => <option key={second} value={second}>{second}</option>)}
      </select>

      {
        isAlarmEnabled
          ?
            <button onClick={() => disableAlarm()}>
              Disable alarm
            </button>
          :
            <button onClick={() => setAlarm(fromHoursMinutesSeconds(selectedHours, selectedMinutes, selectedSeconds))}>
              Set alarm
            </button>
      }
    </div>
)};

export default connect(mapStateToProps, mapDispatchToProps)(Picker);