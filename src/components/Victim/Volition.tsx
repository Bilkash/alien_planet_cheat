import React from "react";
import * as css from "./Volition.styled";

type VolitionType = {
	changeVolition: (add: boolean) => void;
	volition: number;
};

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
