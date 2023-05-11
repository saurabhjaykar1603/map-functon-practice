import React from 'react'
import Student from './Student'

function App() {
  const students = ["saurabh","Harsh","Harshada","Yogita" ]
  return (
    <div>
      <h1>React app</h1>
     {
      students.map((stude)=>{
        return <Student name={stude}/>
      })
     }
    </div>
  )
}

export default App
