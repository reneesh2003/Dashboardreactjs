import React from 'react'
import './css/Dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate()
    const handleWeatherApp = ()=>{
        navigate('\weatherapp')
    }
    const handleStopWatch =()=>{
        navigate('\stopwatch')
    }
    
  return (
    <div class="container">
        <h1 className="page-heading">Welcome to the Dashboard</h1>
    <div class="card">
      <h2>Weather App</h2>
      <p>Get real-time weather data</p>
      <button onClick={handleWeatherApp} class="btn">Go to Weather App</button>
    </div>
    <div class="card">
      <h2>Stopwatch</h2>
      <p>Measure time with precision</p>
      <button onClick={handleStopWatch} class="btn">Go to Stopwatch</button>
    </div>
  </div>
  )
}

export default Dashboard