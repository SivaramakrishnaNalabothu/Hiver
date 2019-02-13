import React from 'react';
import PropTypes from 'prop-types';

const Dot = ({ onClick, value, winner }) => {
  return (
    <div
      onClick={onClick}
      className={`cell ${value || 'free'} ${winner ? 'won' : ''}`}
    >
      {value}
    </div>
  )
};

Dot.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  winner: PropTypes.bool,
};

export default Dot;
