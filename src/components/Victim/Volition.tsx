import React from "react";
import type { VolitionType } from "../types";

import * as css from "./Volition.styled";

export default function Volition(props: VolitionType) {
	const { volition, changeVolition } = props;

	return (
		<css.VolitionBox>
			<css.VolitionTitle>Volition:</css.VolitionTitle>

			<css.VolitionBoxInner>
				<css.VolitionButton onClick={() => changeVolition(true)}>
					+
				</css.VolitionButton>

				<css.VolitionState>{volition}</css.VolitionState>

				<css.VolitionButton onClick={() => changeVolition(false)}>
					-
				</css.VolitionButton>
			</css.VolitionBoxInner>
		</css.VolitionBox>
	);
}
