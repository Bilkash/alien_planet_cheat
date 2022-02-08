import React, { useState } from "react";
import AddButton from "../AddButton";

import * as css from "./index.styled";
import { VictimType } from "../types";
import Victim from "../Victim";

export default function Main() {
	const [victimList, setVictimList] = useState<VictimType[]>([]);

	function Add(it: VictimType) {
		setVictimList((arr) => [...arr, it]);
	}

	function renderVictimList() {
		return victimList.map((it, index) => {
			return <Victim key={index} {...it} />;
		});
	}

	return (
		<css.Wrapper>
			<css.Title>Victim list</css.Title>

			<div>{renderVictimList()}</div>

			<AddButton handler={Add} />
		</css.Wrapper>
	);
}
