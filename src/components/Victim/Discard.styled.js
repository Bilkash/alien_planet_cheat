import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;

	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr;

	grid-column: 2/3;
	grid-row: 1/3;
`;

export const ItemWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Item = styled.div`
	width: 40px;
	height: 40px;

	display: flex;
	align-items: center;

	margin: 5px;
	padding: 5px;

	border: ${(props) =>
		props.theme.color ? "3px solid red" : "3px solid black"};
	border-radius: 5px;
`;
