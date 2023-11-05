import React from 'react'

const ShowCountryList = ({filteredCountries, handleShowCountry}) => {
  return (
    <div>
      {filteredCountries
        .map(country =>
        <p key={country.name.official}>{country.name.common}<button onClick={()=>handleShowCountry(country.name.common)}>
          show
        </button>
        </p>)}
    </div>
  )
}

export default ShowCountryList
