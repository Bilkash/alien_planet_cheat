import React from "react";

import * as css from "./index.styled";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<css.Main>
			<css.Header />
			{children}
			<css.Footer />
		</css.Main>
	);
}
