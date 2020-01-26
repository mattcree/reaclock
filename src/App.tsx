import React from 'react';
import './App.css';
import { Clock } from './clock';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { updateCurrentTime } from './clock/actions';
import { Alarm } from "./alarm";
import { Picker } from "./alarm/picker";

const App: React.FC = () => {
  setInterval(() => store.dispatch(updateCurrentTime(new Date())), 1000);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Clock />
          <Alarm />
          <Picker />
        </header>

      </div>
    </Provider>
  );
};

export default App;
