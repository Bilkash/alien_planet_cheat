import styled from "styled-components";

export const Wrapper = styled.div`
	position: fixed;
	bottom: 0;

	height: 100px;
	width: 100%;

	margin: 0 0 0 -15px;

	background-color: black;

	color: white;
`;

export const Inner = styled.div`
    display: flex;
    overflow: auto;
`;

export const Player = styled.div`
  width: 120px;
  margin-left: 20px;
`;

export const PlayerName = styled.div`
  font-size: 12px;
`;