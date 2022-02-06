import React, { useState } from "react";

import { Victim } from "../types";
import Plus from "../../svg/Plus";

import * as css from "./index.styled";

type AddButtonType = {
	handler: (it: Victim) => void;
};

export default function AddButton(props: AddButtonType) {
	const { handler } = props;

	const [name, setName] = useState("");

	return (
		<css.Wrapper>
			<css.Button onClick={() => handler({ name })}>
				<Plus />
			</css.Button>

			<css.Input
				type={"text"}
				placeholder={"Enter name"}
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
		</css.Wrapper>
	);
}
