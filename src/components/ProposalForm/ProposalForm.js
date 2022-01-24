import React, { useState } from "react";
import TextField from "./../TextField/TextField";
import TextArea from "./../TextArea/TextArea";
import Dropdown from "./../Dropdown/Dropdown";
import Button from "./../Button/Button";

import "./ProposalForm.css";

const intendedNetwork = [
	{
		value: 'please-select',
		label: 'Select option...',
		isClearable: true,
	},
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

	const [proposalTitle, setProposalTitle] = useState("");
	const [proposalSummary, setProposalSummary] = useState("");
	const [proposalIntendedNetwork, setProposalIntendedNetwork] = useState("");
	const [proposalPrice, setProposalPrice] = useState("");

	const [error, setError] = useState("");

	const handleProposalTitle = e => {
		const value = e.target.value;

		// Field validation
		if (value.includes("_")) {
			setError("You cannot use an underscore");
		} else {
			setError(null);
		}

		setProposalTitle(value);
	};

	const handleProposalSummary = e => {
		setProposalSummary(e.target.value);
	};

	const handleProposalIntendedNetwork = e => {
		setProposalIntendedNetwork(e.target.value);
	};

	const handleProposalPrice = e => {
		const value = e.target.value;

		// Field validation
		if (value.includes("_")) {
			setError("You cannot use an underscore");
		} else {
			setError(null);
		}

		setProposalPrice(e.target.value);
	};

	const handleFormSubmit = e => {
		console.table([
			['Proposal title:', proposalTitle],
			['Proposal summary:', proposalSummary],
			['Intended network:', proposalIntendedNetwork],
			['Price per episode:', proposalPrice]
		]);

		e.preventDefault();
	};

	return (

		<>
			<div className="form-proposal form-proposal--align-center">
				<form>
					<TextField 
						label="Proposal title" 
						name="proposalTitle"
						onChange={handleProposalTitle} 
					/>

					{error && (
						<p>{error}</p>
					)}

					<TextArea 
						label="Proposal summary" 
						name="proposalSummary" 
						onChange={handleProposalSummary}
					/>

					<Dropdown 
						label="Intended network"
						name="proposalIntendedNetwork"
						options={intendedNetwork} 
						onChange={handleProposalIntendedNetwork}
					/>

					<TextField 
						label="Price per episode" 
						name="proposalPrice" 
						type="number"
						onChange={handleProposalPrice}
					/>

					{error && (
						<p>{error}</p>
					)}

					<Button onClick={handleFormSubmit}>Submit</Button>
				</form>
			</div>
		</>

	);
};

export default ProposalForm;