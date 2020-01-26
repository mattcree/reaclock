import React from "react";
import './Alarm.css';
import {RootState} from "../store/store";
import {connect} from "react-redux";

interface AlarmProps {
  currentTime: Date;
  alarmTime: Date;
  isAlarmEnabled: boolean;
}

const mapStateToProps = (state: RootState) => ({
  currentTime: state.clock.currentTime,
  alarmTime: state.alarm.alarmTime,
  isAlarmEnabled: state.alarm.isAlarmEnabled,
});

const isRinging = (currentTime: Date, alarmTime: Date) => currentTime.getTime() > alarmTime.getTime() && currentTime.getTime() - alarmTime.getTime() < 30000;

const Alarm: React.FC<AlarmProps> = ({currentTime, alarmTime, isAlarmEnabled}) => {
  console.log(isRinging(currentTime, alarmTime))
  console.log(isAlarmEnabled)
  return (<div id="alarm" className={isRinging(currentTime, alarmTime) && isAlarmEnabled ? 'ringing' : 'not-ringing'}>
    <p>Alarm time {alarmTime?.toLocaleTimeString()}</p>
    <p>{isAlarmEnabled ? "Enabled" : "Disabled"}</p>
  </div>)
};


export default connect(mapStateToProps)(Alarm);