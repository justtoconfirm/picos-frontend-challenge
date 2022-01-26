import React from "react";
import ProposalForm from "./components/ProposalForm/ProposalForm";

import "./App.css";

const App = () => {
	return (

		<>
			<main role="main">
				
				<div className="form">
					<ProposalForm 
						formTitle="Picos"
						formCopy="Enter information to select radio programmes and podcasts for broadcast."
					/>
				</div>

			</main>
		</>

	);
};

export default App;
