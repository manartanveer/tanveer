import React from 'react'

function SpreadOperator() {
    const MaleStudent = ['naveed', 'ali', 'nawaz'];
     const femaleStudent = ['amna', 'amna2', 'amna3'];
     const allstudents = [...MaleStudent,...femaleStudent]
  return (
    <div>
      <h1>all student</h1>
      <ul>
      {
          allstudents.map((student,index)=>
        (<li key = {index}>{student}</li>)

    )
      }

        
      </ul>
    </div>
  )
}

export default SpreadOperator
