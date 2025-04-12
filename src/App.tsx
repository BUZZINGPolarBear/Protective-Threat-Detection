import { useState } from "react";
import { MainFrame } from "./MainFrame/Main.Frame.tsx";
import { GlobalStyle } from "./globalStyle.ts";
function App() {
	return (
		<>
			<GlobalStyle />
			<MainFrame />
		</>
	);
}

export default App;
