import React from "react";
import { VictimType } from "../types";
import * as css from "./index.styled";

export default function Victim(props: VictimType) {
	const { name } = props;

	return (
		<css.Wrapper>
			<css.Name>{name}</css.Name>
		</css.Wrapper>
	);
}
