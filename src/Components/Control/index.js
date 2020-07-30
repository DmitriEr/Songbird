import React from 'react';
import PropTypes from 'prop-types';

const Control = ({
  random,
  setNumber,
  number,
  setBools,
  result,
  setSelect,
  setResult,
  setPlusScore,
  setCount,
  setStage,
  score,
  setShowOther,
}) => {
  const showButton = () => {
    if (result.has(random)) {
      return false;
    }
    return true;
  };

  return (
    <div className="control__wrapper">
      <button
        disabled={showButton()}
        className="control__button"
        type="button"
        onClick={() => {
          const value = number + 1;
          setNumber(value);
          setBools(false);
          setPlusScore(true);
          setCount(6);
          setSelect((prev) => new Set(prev.clear()));
          setResult((prev) => new Set(prev.clear()));
          setShowOther(true);
          if (number === 5) {
            if (score === 30) {
              setStage('completed');
              setNumber(0);
            } else {
              setStage('again');
              setNumber(0);
            }
          }
        }}
      >
        Next Level
      </button>
    </div>
  );
};

Control.propTypes = {
  random: PropTypes.number.isRequired,
  setNumber: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  setBools: PropTypes.func.isRequired,
  result: PropTypes.instanceOf(Set).isRequired,
  setSelect: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
  setPlusScore: PropTypes.func.isRequired,
  setCount: PropTypes.func.isRequired,
  setStage: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setShowOther: PropTypes.func.isRequired,
};

export default Control;
