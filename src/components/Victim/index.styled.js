import styled from "styled-components";

export const Wrapper = styled.div`
	height: 150px;
	width: 100%;

	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 2fr;

	border-bottom: 3px solid black;
	border-image: linear-gradient(to right, black, white) 1;
`;

export const Name = styled.div`
	font-size: 24px;

	grid-column: 1/2;
	grid-row: 1/2;
`;
