import styled from 'styled-components';

export const BoardWrapper = styled.div`
	.row-divider {
		border-bottom: 3px solid black;
	}
	.sudokuGrid {
		display: grid;
		width: 600px;
		height: 600px;
		margin: 0 auto;
		color: #fff;
		border: 3px solid #000;
		border-radius: 10px;
		.cell {
			border: 1px solid #2c3e50;
			font-family: Helvetica;
			font-weight: bold;
			font-size: 1em;
			display: flex;
			justify-content: center;
			align-items: center;
			outline: none;

			input[type='text'] {
				position: relative;
				margin: 0;
				border: 0;
				width: 100%;
				height: 50px;
				text-align: center;
				font-size: 1.8rem;
				font-weight: 800;
				font-family: Arial, Helvetica, sans-serif;

				:disabled {
					color: #4c6f73;
					border-radius: 25px;
					width: 40px;
					height: 40px;
					background: #f2f2f2;
				}
			}
		}

		.row-divider {
			border-bottom: 5px solid #000;
		}

		.col-divider {
			border-right: 5px solid #000;
		}

		.collided, .collided input[type='text'] {
			background: #e55252;
			color: #fff;
		}

		grid-template-columns: repeat(9, 1fr);
		padding: 0px;
	}
`;