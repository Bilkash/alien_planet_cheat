import React, { useState } from "react";
import type { VictimType } from "../types";
import Volition from "./Volition";

import * as css from "./index.styled";
import Discard from "./Discard";

export default function Victim(props: VictimType) {
	const [volition, setVolition] = useState<number>(3);

	const { name } = props;

	function changeVolition(add: boolean) {
		if (add) {
			volition === 3 ? null : setVolition(volition + 1);
		} else {
			volition === 0 ? null : setVolition(volition - 1);
		}
	}

	return (
		<css.Wrapper>
			<css.Name>name: {name}</css.Name>

			<Volition changeVolition={changeVolition} volition={volition} />

			<Discard />
		</css.Wrapper>
	);
}
