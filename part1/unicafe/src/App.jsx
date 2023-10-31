import { useState } from 'react'

const Header = (props) => {
return <h1>{props.text}</h1>
}

const Button = (props) => { 
  return <button onClick={props.handleClick}>{props.text}</button>;
}

const StatisticsLine = (props) => {
  return (<tr><td>{props.text}</td><td> {props.value}</td></tr>)
}

const Statistics = ({good, bad, neutral}) => {
  const all = good + neutral + bad
  if (all > 0) {
  return (
  <div>
      <Header text="statistics" />
      <table>
      <tbody>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={((good-bad)/(all)).toFixed(1)} />
      <StatisticsLine text="positive" value={`${(good/(all)*100).toFixed(1)}%`} />
      </tbody>
      </table>
  </div>
  )
  } else {
  return <p>No feedback given</p>
  }
}

function App() { 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={() => setGood(prevGood => prevGood+ 1)} text="good" />
      <Button handleClick={() => setNeutral(prevNeutral=> prevNeutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(prevBad => prevBad + 1)} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
