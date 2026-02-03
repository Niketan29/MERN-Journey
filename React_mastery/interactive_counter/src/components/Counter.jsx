import React from 'react'

const Counter = ({value}) => {
  return (
    <div style={{"color": "orange", "fontSize":"2rem"}}>
      <p>Count Value : {value}</p>
    </div>
  )
}

export default Counter
