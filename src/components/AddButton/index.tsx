import React, { useState } from "react";

import { VictimType } from "../types";
import Plus from "../../svg/Plus";

import * as css from "./index.styled";

type AddButtonType = {
	handler: (it: VictimType) => void;
};

export default function AddButton(props: AddButtonType) {
	const { handler } = props;

	const [name, setName] = useState("");
	const [error, setError] = useState(false);

	return (
		<css.Wrapper>
			<css.Button
				onClick={() => {
					if (name) {
						setError(false);
						handler({ name });
						setName("");
					} else {
						setError(true);
					}
				}}>
				<Plus />
			</css.Button>

			<css.Input
				type={"text"}
				theme={{ color: error }}
				placeholder={"Enter name"}
				value={name}
				onChange={(event) => {
					setError(false);

					setName(event.target.value);
				}}
			/>
		</css.Wrapper>
	);
}
