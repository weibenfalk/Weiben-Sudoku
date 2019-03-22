import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ cell, inputCallback }) => {
	return (
		<input
			type="text"
			value={cell.value !== 0 ? cell.value : ''}
			disabled={cell.disabled}
			className="cell"
			onChange={e => inputCallback(e.target.value, cell.x, cell.y)}
		/>
	);
};

Cell.propTypes = {
	cell: PropTypes.object,
	inputCallback: PropTypes.func,
}

export default Cell;
