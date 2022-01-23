import React from "react";
import TextField from "./../TextField/TextField";
import TextArea from "./../TextArea/TextArea";
import Button from "./../Button/Button";

import "./ProposalForm.css";

const ProposalForm = () => {
	return (

		<>
			<div className="form-proposal form-proposal--align-center">
				<form>
					<TextField 
						label="Proposal title" 
						name="proposalTitle" 
					/>

					<TextArea 
						label="Proposal summary" 
						name="proposalSummary" 
					/>

					<Button>Submit</Button>
				</form>
			</div>
		</>

	);
};

export default ProposalForm;