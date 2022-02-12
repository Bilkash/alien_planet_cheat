import React, { useEffect, useState } from "react";
import type { DefineArrIt } from "../types";

import * as css from "./Discard.styled";

const defArr: DefineArrIt[] = [
	{ id: 1, available: false },
	{ id: 2, available: false },
	{ id: 3, available: false },
	{ id: 4, available: false },
	{ id: 5, available: false },
	{ id: 6, available: false },
	{ id: 7, available: false },
	{ id: 8, available: false },
	{ id: 9, available: false },
	{ id: 10, available: false },
];

export default function Discard() {
	const [discard, setDiscard] = useState<DefineArrIt[]>(defArr);

	const changeDiscard = function (
		arr: DefineArrIt[],
		id: number
	): DefineArrIt[] {
		return arr.map((it) =>
			it.id === id ? { ...it, available: !it.available } : it
		);
	};

	useEffect(() => {
		const newCards = discard.reduce((arr: number[], { available, id }) => {
			if (available) {
				arr.push(id);

				return arr;
			}

			return arr;
		}, []);

		console.log(newCards);
	}, [discard]);

	return (
		<css.Wrapper>
			<css.ItemWrapper>
				{discard.map(({ id, available }, index) => (
					<css.Item
						theme={{ color: available }}
						key={index}
						onClick={() => setDiscard(changeDiscard(discard, id))}>
						<div>{id}</div>
					</css.Item>
				))}
			</css.ItemWrapper>
		</css.Wrapper>
	);
}
