import React, { useState } from "react";
import TextField from "./../TextField/TextField";
import TextArea from "./../TextArea/TextArea";
import Dropdown from "./../Dropdown/Dropdown";
import Button from "./../Button/Button";
import Message from "./../Message/Message";

import "./ProposalForm.css";

const initialValues = {
  	proposalTitle: {
    	value: "",
    	message: null,
  	},
  	proposalSummary: {
    	value: "",
    	message: null,
  	},
  	proposalIntendedNetwork: {
    	value: "",
    	message: null,
  	},
  	proposalPrice: {
    	value: "",
    	message: null,
  	},
};

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
	const [showSuccess, setSuccess] = useState(false);

	const handleProposalTitle = e => {
		const value = e.target.value;

		setFormData((prevState) => {
			return {
				...prevState,
				proposalTitle: {
					value: e.target.value,
					message: value.includes("_") ? "You cannot use an underscore" : false,
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
					value: e.target.value,
					message: e.target.value.length < 15 ? "Enter at least 15 characters" : false,
				},
			};
		});
	};

	const handleProposalIntendedNetwork = e => {
		setFormData((prevState) => {
			return {
				...prevState,
				proposalIntendedNetwork: {
					value: e.target.value,
					message: e.target.value === "" ? "Please select an option" : false,
				},
			};
		});
	};

	const handleProposalPrice = e => {
		setFormData((prevState) => {
			return {
				...prevState,
				proposalPrice: {
					value: e.target.value,
					message: Number(e.target.value) < 0 ? "Number needs to be positive" : false,
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

		setSuccess(true);

		e.preventDefault();
	};

	return (

		<>
			<div className="form-proposal form-proposal--align-center">
				<form>
					<TextField
						label="Proposal title"
						name="proposalTitle"
						placeholder="Enter a Proposal title"
						value={formData?.proposalTitle?.value}
						onChange={handleProposalTitle}
						message={formData?.proposalTitle?.message}
					/>

					<TextArea
						label="Proposal summary"
						name="proposalSummary"
						placeholder="Enter a Proposal summary"
						rows="8"
						value={formData?.proposalSummary?.value}
						onChange={handleProposalSummary}
						message={formData?.proposalSummary?.message}
					/>

					<Dropdown
						label="Intended network"
						name="proposalIntendedNetwork"
						options={intendedNetwork}
						value={formData?.proposalIntendedNetwork?.value}
						onChange={handleProposalIntendedNetwork}
						message={formData?.proposalIntendedNetwork?.message}
					/>

					<TextField
						label="Price per episode"
						name="proposalPrice"
						placeholder="Enter a Proposal price (GDP)"
						type="number"
						value={formData?.proposalPrice?.value}
						onChange={handleProposalPrice}
						message={formData?.proposalPrice?.message}
					/>

					<Button
						disabled={
							!formData?.proposalTitle?.value ||
							!formData?.proposalSummary?.value ||
							!formData?.proposalIntendedNetwork?.value ||
							!formData?.proposalPrice?.value ||
							formData?.proposalTitle?.message ||
							formData?.proposalSummary?.message ||
							formData?.proposalPrice?.message
						}
						onClick={handleFormSubmit}
					>
						Submit
					</Button>

					{showSuccess && <Message message="Success" />}
				</form>
			</div>
		</>

	);
};

export default ProposalForm;