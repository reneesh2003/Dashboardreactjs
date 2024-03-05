import React from 'react'
import './css/Dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate()
    const handleWeatherApp = ()=>{
        navigate('/Dashbaordreactjs/weatherapp')
    }
    const handleStopWatch =()=>{
        navigate('/Dashbaordreactjs/stopwatch')
    }
    
  return (
    <div className="container">
        <h1 className="page-heading">Welcome to the Dashboard</h1>
    <div className="card">
      <h2>Weather App</h2>
      <p>Get real-time weather data</p>
      <button onClick={handleWeatherApp} className="btn">Go to Weather App</button>
    </div>
    <div className="card">
      <h2>Stopwatch</h2>
      <p>Measure time with precision</p>
      <button onClick={handleStopWatch} className="btn">Go to Stopwatch</button>
    </div>
  </div>
  )
}

export default Dashboard