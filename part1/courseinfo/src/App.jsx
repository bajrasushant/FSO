const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  // console.log(props.parts);
  return (  
    <div>
      {
        props.parts.map((part) => {
          return(
            <Part key={part.name} part={part.name} exercise={part.exercises} />
          )
        })
      }
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}
function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React', exercises: 10
      },
      {
        name: 'Using props to pass data', exercises: 7
      }, 
      {
        name: 'State of a component', exercises: 15
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
