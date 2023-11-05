const DisplayCountryDetails = ({countryToShow}) => {
  return (
<div key={countryToShow.name}>
          <h1>{countryToShow.name}</h1>
          <p>capital {countryToShow.capital}</p>
          <p>area {countryToShow.area}</p>
          <br />
          <b>languages</b>
          <ul>
          {countryToShow.languages.map(lang=><li key={lang}>{lang}</li>)}
          </ul>
          <img height="200px" width="300px" src={countryToShow.flagSrc} />

          </div>
  )
}

export default DisplayCountryDetails
