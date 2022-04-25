import React, { useEffect, useState } from "react";
import * as css from "./index.styled";
import { storeCards } from "../../store";

export default function Change() {
	const [cards, setCards] = useState<any>({});

	useEffect(() => {
		storeCards.subscribe(() => setCards(storeCards.getState()));
	});

	function renderChanges() {
		return Object.entries(cards).map(it => {
			return (
				<css.Player key={Math.random()}>
					<css.PlayerName>
						{it[0]}
					</css.PlayerName>
					cards: {it[1]}
				</css.Player>
			);
		});
	}

	return (
		<css.Wrapper>
			<css.Inner>{renderChanges()}</css.Inner>
		</css.Wrapper>
	);
}
