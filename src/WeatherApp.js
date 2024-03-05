import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/WeatherApp.css'

const WeatherApp = () => {
    const navigate=useNavigate()
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionsVisibility, setSuggestionsisibility] = useState(false);

  
    const API_KEY = '2d0e44b04e212c590f65e993c2c31d3d';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
    const AUTO_COMPLETE_URL = `https://api.openweathermap.org/data/2.5/find`;
  
    const search = async (e) => {
      if (e.key === 'Enter') {
        try {
          const { data } = await axios.get(API_URL, {
            params: {
              q: query,
              units: 'metric',
              appid: API_KEY,
            },
          });
          setWeather(data);
          setQuery('');
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };
  
    const fetchSuggestions = async (query) => {
      try {
        const { data } = await axios.get(AUTO_COMPLETE_URL, {
          params: {
            q: query,
            appid: API_KEY,
          },
        });
        setSuggestions(data.list);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };
    const handleSuggestionClick = async (suggestion) => {
        setSuggestionsisibility(false)
        try {
          const { data } = await axios.get(API_URL, {
            params: {
              q: suggestion.name,
              units: 'metric',
              appid: API_KEY,
            },
          });
          setWeather(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
  
    useEffect(() => {
      if (query) {
        fetchSuggestions(query);
      } else {
        setSuggestions([]);
      }
    }, [query]);

    const handleHome =()=>{
        navigate('/')
      }

  return (
    <div className="weather-app">
        <button className="home-button" onClick={handleHome}>Home</button>
      <input
        type="text"
        className="search-bar"
        placeholder="Enter location..."
        value={query}
        onClick={()=>setSuggestionsisibility(true)}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      <div className="suggestions">
        {suggestionsVisibility && suggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion" onClick={() => handleSuggestionClick(suggestion)}>
            <p>{suggestion.name}</p>
          </div>
        ))}
      </div>
      {weather.main &&(
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].main}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;