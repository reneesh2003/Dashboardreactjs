import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import StopWatch from './StopWatch';
import WeatherApp from './WeatherApp';

function App() {
  return (
      <Routes>
        <Route path='/Dashbaordreactjs' element={<Dashboard/>} />
        <Route path='/Dashbaordreactjs/stopwatch' element={<StopWatch/>} />
        <Route path='/Dashbaordreactjs/weatherapp' element={<WeatherApp/>} />
      </Routes>
  );
}

export default App;
