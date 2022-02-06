import React, { useState } from "react";
import AddButton from "../AddButton";

import * as css from "./index.styled";
import { Victim } from "../types";

export default function Main() {
	const [victimList, setVictimList] = useState<Victim[]>([]);

	function Add(it: Victim) {
		setVictimList((arr) => [...arr, it]);
	}

	function renderVictimList() {
		return victimList.map((it, index) => {
			return <div key={index}>{it.name}</div>;
		});
	}

	return (
		<css.Wrapper>
			<div>main list</div>

			<div>{renderVictimList()}</div>

			<AddButton handler={Add} />
		</css.Wrapper>
	);
}
