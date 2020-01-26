import React from "react";
import { RootState } from "../store/store";
import { connect } from "react-redux";

interface ClockProps {
  time?: Date
}

const mapStateToProps = (state: RootState) => ({time: state.clock.currentTime});

const Clock: React.FC<ClockProps> = ({time}) => (
  <h1>{time?.getUTCHours()}:{time?.getUTCMinutes()}:{time?.getUTCSeconds()}</h1>
);

export default connect(mapStateToProps)(Clock);