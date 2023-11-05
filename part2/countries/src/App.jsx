import axios from "axios"
import { useEffect, useState } from "react"
import Filter from "./components/Filter";
import ShowCountryList from "./components/ShowCountryList";
import ManyMatches from "./components/ManyMatches";
import DisplayCountryDetails from "./components/DisplayCountryDetails";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countryToShow, setCountryToShow] = useState(null)
  useEffect(() => {
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res=>setCountries(res.data))
    }, [])

  if(!countries) return null

  const handleCountryNameChange = (e)=> {
    const search = e.target.value
    const searchCountry = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
    // console.log(searchCountry);
    if(searchCountry.length === 1) {
      const country =  getDetails(searchCountry[0])
      setCountryToShow(country);
      setFilteredCountries(searchCountry);
    }else{
      setCountryToShow(null);
      setFilteredCountries(searchCountry.length === countries.length ? []:searchCountry);
    }
  }

  const getDetails = country => {
    const countryName = country.name.common;
    const countryCapital = country.capital[0];
    const countryArea = country.area;
    const countryLanguages = Array.from(Object.values(country.languages));
    const countryFlagSrc = country.flags.png;
    const capitalLat = country.capitalInfo.latlng[0];
    const capitalLng = country.capitalInfo.latlng[1];
    /* console.log(
      {
        name: countryName,
        capital: countryCapital,
        area: countryArea,
        languages: countryLanguages,
        flagSrc: countryFlagSrc,
        capitalLat: capitalLat,
        capitalLng: capitalLng,
      }
    ) */
    return {
      name: countryName,
      capital: countryCapital,
      area: countryArea,
      languages: countryLanguages,
      flagSrc: countryFlagSrc,
      capitalLat: capitalLat,
      capitalLng: capitalLng,
    }
  }

  const handleShowCountry = (countryToShow) => {
    const showCountry = countries.filter(country => country.name.common.toLowerCase().includes(countryToShow.toLowerCase()));
    const country =  getDetails(showCountry[0])
    setCountryToShow(country);
    setFilteredCountries(showCountry);
  }

  return (
      <>
      <Filter handleCountryNameChange={handleCountryNameChange} />
      {filteredCountries.length < 2 
        ? null
        :filteredCountries.length <= 10 
          ? <ShowCountryList filteredCountries={filteredCountries} handleShowCountry={handleShowCountry} />
          : <ManyMatches />
      }

      {countryToShow 
        ? <><DisplayCountryDetails countryToShow={countryToShow}/> 
        <WeatherDetails country={countryToShow}/>
        </>
        :null
      }
      </>
  )
}

export default App
