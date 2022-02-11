import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as css from "./index.styled";

ReactDOM.render(
	<React.StrictMode>
		<css.FontStyles />
		<css.GlobalFontStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
