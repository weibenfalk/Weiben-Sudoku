import styled from 'styled-components';

export const NewBoardButton = styled.button`
	background: #999999;
	font-size: 1.4rem;
	font-weight: 800;
	width: 200px;
	height: 50px;
	border-radius: 10px;
	margin: 20px auto;
	display: block;
	cursor: pointer;
	outline: none;
	transition: all 0.5s ease;

	:hover {
		opacity: 0.8
	}
`;

export const Status = styled.div`
	display: block;
	border-radius: 50px;
	width: 50px;
	height: 50px;
	margin: 0 auto;
	background: ${props => (props.status ? 'green' : 'red')};
`;