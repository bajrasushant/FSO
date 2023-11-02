import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPersons, setFilterPersons] = useState([])

  const handleFilterChange = (e) => {
    const search = e.target.value
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    setFilterPersons(filteredPersons)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  
  const addToPersons = (e) => {
    e.preventDefault()
    if(!checkForPrevEntry(newName)){
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      setNewName('')
      setNewNumber('')
      alert(`${newName} is already in the phone book`);
    }
  }

  const checkForPrevEntry = (name) => {
    return persons.some(person=>person.name === name)
  }

  const personsToShow = filterPersons.length === 0
  ? persons
  : filterPersons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange}/> 
      <h2>Add a new</h2>
      <PersonForm addToPersons={addToPersons} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
