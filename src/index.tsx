import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FontStyles, GlobalFontStyle } from "./index.styled";

ReactDOM.render(
	<React.StrictMode>
		<FontStyles />
		<GlobalFontStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
