import React from "react";
import TextField from "./../TextField/TextField";
import TextArea from "./../TextArea/TextArea";
import Dropdown from "./../Dropdown/Dropdown";
import Button from "./../Button/Button";

import "./ProposalForm.css";

const intendedNetwork = [
	{
		value: 'radio-1',
		label: 'Radio 1'
	},
	{
		value: 'radio-2',
		label: 'Radio 2'
	},
	{
		value: 'radio-1xtra',
		label: 'Radio 1Xtra'
	},
	{
		value: 'radio-3',
		label: 'Radio 3'
	},
	{
		value: 'radio-4',
		label: 'Radio 4'
	},
	{
		value: 'radio-5-live',
		label: 'Radio 5 Live'
	},
	{
		value: 'radio-6music',
		label: 'Radio 6Music'
	},
];

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

					<Dropdown 
						label="Intended network"
						name="proposalIntendedNetwork"
						options={intendedNetwork} 
					/>

					<Button>Submit</Button>
				</form>
			</div>
		</>

	);
};

export default ProposalForm;