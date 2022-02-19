import React, { useEffect, useState } from "react";
import * as css from "./index.styled";
import { storeCards } from "../../store";

export default function Change() {
	const [cards, setCards] = useState<any>({});

	useEffect(() => {
		storeCards.subscribe(() => setCards(storeCards.getState()));
	});

	console.log(cards);

	return <css.Wrapper>Change</css.Wrapper>;
}
