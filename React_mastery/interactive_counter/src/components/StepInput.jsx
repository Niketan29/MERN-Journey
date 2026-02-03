import React from "react";

const StepInput = ({ step, onStepChange }) => {
  const handleChange = (e) => {
    const val = Number(e.target.value);
    
    if (val >= 1 && val <= 10) {
      onStepChange(val);
    }
  };

  return (
    <div style={{"display":"flex", "alignItems":"center","gap":"20px"}}>
      <label htmlFor="step">Step size : 1-10</label>
      <input
        type="number"
        name="step"
        id="step"
        min={1}
        max={10}
        value={step}
        onChange={handleChange}
      />
    </div>
  );
};

export default StepInput;
