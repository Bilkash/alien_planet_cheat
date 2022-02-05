import React from "react";

import * as css from "./index.styled";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<css.Main>
			<css.Header />

			<css.Inner>{children}</css.Inner>

			<css.Footer />
		</css.Main>
	);
}
