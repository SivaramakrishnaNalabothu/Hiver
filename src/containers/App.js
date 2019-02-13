import React from 'react';
import Board from './board';
import ResetButton from '../components/resetButton';

const App = () => (
  <div>
    <div className="header"><h1> Tic Tac @ Hiver</h1></div>
    <Board />
    <ResetButton />
  </div>
);

export default App;
