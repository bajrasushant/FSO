const Filter = ({handleCountryNameChange}) => {
  return (
      <div>
      find countries <input onChange={handleCountryNameChange}/>
      </div>
  )
}

export default Filter
