import React from "react";
import { Victim } from "../types";
import * as css from "./index.styled";

export default function Victim(props: Victim) {
	const { name } = props;

	return (
		<css.Wrapper>
			<div>{name}</div>
		</css.Wrapper>
	);
}
