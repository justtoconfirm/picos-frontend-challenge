import React from "react";
import TextField from "./../TextField/TextField";
import TextArea from "./../TextArea/TextArea";
import Button from "./../Button/Button";

import "./ProposalForm.css";

const ProposalForm = () => {
	return (

		<>
			<TextField 
				label="Proposal title" 
				name="proposalTitle" 
			/>

			<TextArea 
				label="Proposal summary" 
				name="proposalSummary" 
			/>

			<Button>Submit</Button>
		</>

	);
};

export default ProposalForm;