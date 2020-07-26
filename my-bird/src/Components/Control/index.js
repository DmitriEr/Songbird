import React from 'react';

const Control = ({ choice, random, setNumber, number, setBools, result, setSelect, setResult, setPlusScore, setCount, setStage }) => {

  const showButton = () => {
    if (result.has(random)) {
      return false;
    }
    return true;
  }

  return  (
    <div className="control__wrapper">
      <button
        disabled={showButton()}
        className="control__button"
        onClick={() => {
          const value = number + 1;
          setNumber(value);
          setBools(false);
          setPlusScore(true);
          setCount(6);
          setSelect((prev) => new Set(prev.clear()));
          setResult((prev) => new Set(prev.clear()));
          if (number === 5) {
            setStage('completed');
            setNumber(0);
          }
        }}
      >
        Next Level
      </button>
    </div>
  )
}

export default Control;