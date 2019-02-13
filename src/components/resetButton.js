import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from '../actions';

const ResetButton = ({ dispatch }) => (
  <button
    className="reset"
    onClick={() => dispatch(reset())}
  >
    Reset
  </button>
);

ResetButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const ResetContainer = connect()(ResetButton);

export default ResetContainer;
