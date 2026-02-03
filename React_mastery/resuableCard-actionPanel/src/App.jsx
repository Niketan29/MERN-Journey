import React, { useState } from "react";
import Counter from "./components/Counter";
import CounterControl from "./components/CounterControl";
import Card from "./components/Card";
import ActionPanel from "./components/ActionPanel";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => Math.min(prev + 1, 100));
  };

  const handleDecrement = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  const isIncrementDisabled = count >= 100;
  const isdecrementDisabled = count < 1;

  return (
    <div>
      <Card>
        <h2>Interactive Counter</h2>
        <Counter value={count} />
        <ActionPanel>
          <CounterControl
            increment={handleIncrement}
            decrement={handleDecrement}
            reset={handleReset}
            incrementDisabled={isIncrementDisabled}
            decrementDisabled={isdecrementDisabled}
          />
        </ActionPanel>
      </Card>
    </div>
  );
};

export default App;
