import React from "react";
import styled from "styled-components";

import Layout from "./components/Layout";

function App() {
	return (
		<Layout>
			<Test>{"sSdad"}</Test>
		</Layout>
	);
}

export default App;

const Test = styled.div`
	color: red;
`;
