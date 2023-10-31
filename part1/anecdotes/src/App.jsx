import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Display = (props) => {
  return (
    <div>
      <div>
        {props.content}
      </div>
      <div>
        has {props.points} votes
      </div>
    </div>
  )
};

const Button = (props) => <button onClick={props.do}>{props.text}</button>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(() => {
    const initialPoints = {};
    anecdotes.forEach((_, index) => {
      initialPoints[index] = 0;
    });
    return initialPoints;
  });

  const [highVote, setHighVote] = useState({highestIndex:'0'});

  const randomSelected = () => {
    return  Math.floor(Math.random() * anecdotes.length)
  }

  const increaseVote = (selected) => {
    const copy = {...points}
    copy[selected] += 1
    setPoints(copy)
    let highestIndex = null;
    let highestPoint = -1;
    for(const point in copy) {
      if(copy[point] > highestPoint) {
        highestPoint = copy[point]
        highestIndex = point
      }
    }
    setHighVote({highestIndex: highestIndex});
  }

  return (
    <>
      <Header text="Anecdote of the day" />
      <Display content={anecdotes[selected]} points={points[selected]} />
      <Button do={() => increaseVote(selected)} text="vote" />
      <Button do={() => setSelected(randomSelected)} text="next anecdote" />

      <Header text="Anecdote with the most votes" />
      <Display content={anecdotes[highVote.highestIndex]} points = {points[highVote.highestIndex]} />
    </>
  )
}

export default App
