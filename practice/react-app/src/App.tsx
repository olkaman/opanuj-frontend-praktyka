import { useEffect, useState } from 'react';
import './App.css';
import { getAllCountries } from './countries.service';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then((result) => {
      setCountries(result);
    });
  }, [countries]);

  return (
    <>
      <div>
        <input />
        <div>
          {countries.map((country) => (
            <>
              <div>{country.name.official}</div>
              <div>{country.flag}</div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
