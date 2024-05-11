import countriesAndStates from './Const/countryStateList';
import { useState } from 'react';
import './App.css';

function App() {
  const [states, setStates] = useState([]);
  const onCountrySelect = (e) => {
    console.log(JSON.stringify(e.target.value));
    countriesAndStates.forEach(country => {
      if(country.code === e.target.value){
        setStates(country.states);
        return;
      }
    });
  }
  return (
    <div className="App">
      <select onChange={onCountrySelect}>
        {countriesAndStates.map((country)=>{
          return <option value={country.code} key={country.code}>{country.country}</option>
        })}
      </select>
      <select >
        {states.map((state)=>{
          return <option value={state}>{state}</option>
        })}
      </select>
    </div>
  );
}

export default App;
