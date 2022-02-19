import React, { useEffect, useState } from "react";

import { VictimType } from "../types";
import Plus from "../../svg/Plus";

import * as css from "./index.styled";
import { storeCards } from "../../store";

type AddButtonType = {
	handler: (it: VictimType) => void;
};

export default function AddButton(props: AddButtonType) {
	const { handler } = props;

	const [name, setName] = useState("");
	const [error, setError] = useState(false);
	const [cards, setCards] = useState<any>({});

	useEffect(() => {
		storeCards.subscribe(() => setCards(storeCards.getState()));
	});

	useEffect(() => {
		if (Object.keys(cards).includes(name)) {
			console.log("ER");

			setError(true);
		} else {
			setError(false);
		}
	}, [name]);

	function add() {
		if (name) {
			if (Object.keys(cards).includes(name)) {
				console.log("ER");

				setError(true);
			} else {
				setError(false);
				handler({ name });
				setName("");
			}
		} else {
			setError(true);
		}
	}

	return (
		<css.Wrapper>
			<css.Button onClick={() => add()}>
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
