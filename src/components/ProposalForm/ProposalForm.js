import React, { useState } from "react";
import TextField from "./../TextField/TextField";
import TextArea from "./../TextArea/TextArea";
import Dropdown from "./../Dropdown/Dropdown";
import Button from "./../Button/Button";

import "./ProposalForm.css";

const intendedNetwork = [
	{
		value: "",
		label: "Select option...",
		isClearable: true,
	},
	{
		value: "radio-1",
		label: "Radio 1"
	},
	{
		value: "radio-2",
		label: "Radio 2"
	},
	{
		value: "radio-1xtra",
		label: "Radio 1Xtra"
	},
	{
		value: "radio-3",
		label: "Radio 3"
	},
	{
		value: "radio-4",
		label: "Radio 4"
	},
	{
		value: "radio-5-live",
		label: "Radio 5 Live"
	},
	{
		value: "radio-6music",
		label: "Radio 6Music"
	},
];

const ProposalForm = () => {

	const [formData, setFormData] = useState("");

	const handleProposalTitle = e => {
		const value = e.target.value;

		setFormData((prevState) => {
			return {
				...prevState,
				proposalTitle: {
					value: e.target.value
				},
			};
		});
	};

	const handleProposalSummary = e => {
		const value = e.target.value;

		setFormData((prevState) => {
			return {
				...prevState,
				proposalSummary: {
					value: e.target.value
				},
			};
		});
	};

	const handleProposalIntendedNetwork = e => {
		const value = e.target.value;

		setFormData((prevState) => {
			return {
				...prevState,
				proposalIntendedNetwork: {
					value: e.target.value
				},
			};
		});
	};

	const handleProposalPrice = e => {
		const value = e.target.value;

		setFormData((prevState) => {
			return {
				...prevState,
				proposalPrice: {
					value: e.target.value
				},
			};
		});
	};

	const handleFormSubmit = e => {

		console.table([
			["Proposal title:", formData?.proposalTitle?.value],
			["Proposal summary:", formData?.proposalSummary?.value],
			["Intended network:", formData?.proposalIntendedNetwork?.value],
			["Proposal price:", formData?.proposalPrice?.value]
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

					<Button
						onClick={handleFormSubmit}
					>
						Submit
					</Button>
				</form>
			</div>
		</>

	);
};

export default ProposalForm;