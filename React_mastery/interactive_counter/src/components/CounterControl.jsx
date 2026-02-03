import React from 'react'

const CounterControl = ({increment, decrement, reset, incrementDisabled, decrementDisabled}) => {
  return (
    <div>
      <button onClick={increment} disabled={incrementDisabled}>Increment</button>
      <button onClick={decrement} disabled={decrementDisabled}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterControl
