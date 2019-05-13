import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

import { BoardWrapper } from './BoardStyles';

const Board = ({ board, inputCallback }) => (
  <BoardWrapper>
    <div className="sudokuGrid">
      {board.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={j}
            className={`cell ${i % 3 === 2 && i !== 8 ? 'row-divider' : ''} ${
              j % 3 === 2 && j !== 8 ? 'col-divider' : ''
            }`}
          >
            <Cell cell={cell} inputCallback={inputCallback} />
          </div>
        ))
      )}
    </div>
  </BoardWrapper>
);

Board.propTypes = {
  board: PropTypes.array,
  inputCallback: PropTypes.func,
};

export default Board;
