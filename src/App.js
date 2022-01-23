import React from "react";
import "./App.css";

import TextField from "./components/TextField/TextField";
import TextArea from "./components/TextArea/TextArea";
import Dropdown from "./components/Dropdown/Dropdown";
import Button from "./components/Button/Button";

const App = () => {
	return (

		<>
			<main role="main">
			
				<TextField label="Proposal title" name="proposalTitle" />
				<TextArea label="Proposal summary" name="proposalSummary" />
				<Button>Confirm</Button>

			</main>
		</>

	);
};

export default App;
