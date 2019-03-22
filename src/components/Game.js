import React, { useState, useEffect } from 'react';
import Board from './Board';

import { easy, getBoxes } from '../utils';
import { NewBoardButton, Status } from './GameStyles';

const Game = () => {
	const [gameState, setGameState] = useState({
		board: [],
		boardValidated: true
	});

	// Run once the component mount
	useEffect(() => {
		newGame();
	}, []);

	function newGame() {
		// Grab a random start board from the predefined startboard array
		// There's three of them, easy, medium and hard. I'm using easy now
		const randomStartBoard = easy[Math.floor(Math.random() * easy.length)].map((row, y) =>
			row.split('').map((nr, x) => ({
				value: parseInt(nr),
				disabled: parseInt(nr) !== 0 ? true : false,
				y,
				x,
			}))
		);
		// Put the startboard in the state
		setGameState(prev => ({ ...prev, board: randomStartBoard }));
	}

	function setCellValue(value, x, y) {
		// Have to do below mapping to not mutate the state because of shallow cloning
		const newBoard = gameState.board.map(
			(row, i) => (i === y ? row.map((cell, j) => (j === x ? { ...cell, value } : cell)) : row)
		);
		return newBoard;
	}

	// Could use forEach for this one instead but want to break early if finding duplicates
	// That's not possible with a forEach.
	function validate(array) {
		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
				if (
					array[row].filter(el => el.value === array[row][col].value).length > 1 &&
					array[row][col].value !== 0
				) {
					return false;
				}
			}
		}
		return true;
	}

	function validateBoard(newBoard) {
		const rows = newBoard;
		// Simply reverse the array to be able to loop over cols
		const cols = newBoard.map((row, index) => newBoard.map(column => column[index]));
		// Boxes, function is from "utils.js"
		const boxes = getBoxes(newBoard);

		return validate(rows) && validate(cols) && validate(boxes);
	}

	function inputCallback(value, x, y) {
		// Only allow numbers 1-9 with reg.ex test. Also allow no value
		if (value === '' || /^[1-9]$/.test(value)) {
			const updatedBoard = setCellValue(value !== '' ? parseInt(value) : 0, x, y);
			const validated = validateBoard(updatedBoard);
			setGameState(prev => ({ ...prev, board: updatedBoard, boardValidated: validated }));
		}
	}

	return (
		<div>
			<Board board={gameState.board} inputCallback={inputCallback} />
			<NewBoardButton onClick={newGame}>New Board</NewBoardButton>
			<Status status={gameState.boardValidated} />
		</div>
	);
};

export default Game;
