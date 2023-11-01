import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course, sum}) => {
  return (
    <>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total sum={sum} />
    </>
  )
}

export default Course
