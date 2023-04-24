import { useState, useEffect } from "react";
import styled from "styled-components";

import ProgressBar from "./ProgressBar";
import InputField from "./InputField";
import DropdownSelection from "./DropdownSelection";

const StyledMain = styled.main`
	margin: 40px;
	display: flex;
	flex-direction: column;

	.error-text {
		font: normal 400 12px/16px "Roboto";
		color: #49454f;
		padding: 5px 12px;
	}

	div.fixed-buttons-container {
		position: fixed;
		bottom: 45px;
		right: 45px;
	}

	.tc-flex-block {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		align-items: flex-start;

		.tc-checkbox {
			margin-top: 10px;
		}
		.tc-textbox {
			margin-left: 16px;
		}
	}
`;

const StyledQuestionContainer = styled.div`
	margin-top: 40px;
	display: block;

	#sidebox {
		min-width: 420px;
		max-width: 50%;
	}

	.input-label {
		color: var(--SoJoBlue100);
		position: absolute;
		margin: 26px 0 0 12px;
		display: block;
	}

	.input-container {
		margin-top: 20px;
		height: 56px;
		background-color: var(--SoJoBlue1);
		border-bottom: 1px solid black;
		width: 100%;
		color: var(--SoJoGrey100);
		font: normal 400 16px/24px "Lexend";
		padding: 15px 0 0 12px;
	}
`;

const StyledRatioOption = styled.div`
	border: 1px solid var(--SoJoBlue100);
	min-height: 80px;
	padding: 0 24px;
	background-color: var(--SoJoBlue5);
	color: var(--SoJoBlue100);
	display: flex;
	align-items: center;
	margin-top: 8px;

	.radio-input-container {
	}
	.radio-input-text {
		font: normal 500 14px/20px "Lexend";
		color: var(--SoJoBlue100);
		padding-left: 8px;
	}
`;

const StyledButton = styled.button`
	height: 40px;
	min-width: 82x;
	font: normal 500 14px/20px "Lexend";
	border-radius: 100px;
	padding: 10px 24px;
	margin: 10px;
	&.main {
		background-color: var(--SoJoBlue100);
		color: #ffffff;
	}
	&.secondary {
		color: var(--SoJoBlue100);
		background-color: #ffffff;
	}
`;

const Registration = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [showError, setShowError] = useState(false);
	const [termsCondition, setTermsCondition] = useState(false);
	const [userInput, setUserInput] = useState({
		typeOfWorker: "",
		numberOfWorkers: 0,
		workersExperience: "",
		workerSkillType: "",
		basicSalary: "",
		companyEmail: "",
		companyName: "",
		companyUEN: "",
		companyContactNumber: "",
	});

	const qnList = [
		{
			name: "typeOfWorker",
			label: "Type Of Worker",
			question: "What type of worker are you looking for?",
			subheader: "Onboard with us and start finding workers to hire",
			options: [
				"Welder",
				"Plumbing & pipe fitter",
				"Steel fitter",
				"Electrical wiring technician",
				"Excavator operator",
				"Rigger/signalman",
				"General worker",
				"Lifting supervisor",
				"Safety coordinator",
				"Driver",
			],
			errorText: "Select type of worker",
		},
		{
			name: "numberOfWorkers",
			label: "Number Of Worker",
			question: "How many workers are you looking to hire?",
			errorText: "Enter number of workers",
		},
		{
			name: "workersExperience",
			label: "preferable year's of experience for workers",
			question: "How many workers are you looking to hire?",
			options: [
				"Less than 3 years (cannot qualify for Man Year Entitlement waiver)",
				"More than 3 years (can qualify for Man Year Entitlement waiver)",
				"No preference",
			],
			errorText: "Select preferable workers' experience",
		},
		{
			name: "workerSkillType",
			label: "preferable worker skill",
			question: "What type of worker are you looking for?",
			type: "radio",
			options: [
				"Basic skill (SEC, SEC(K), SEC(K) higher skill certificates)",
				"Higher skill (CoreTrade, Multi-skill certificates with 4 years' experience)",
				"No preference",
			],
			errorText: "Select worker skill requirement",
		},
		{
			name: "basicSalary",
			label: "basic salary range",
			question: "What are the basic salary you willing to offer?",
			type: "radio",
			options: [
				"Less than $20/ day",
				"$21 - 25/ day",
				"$26 - $30/ day",
				"$31 - $35/ day",
				"More than $35/ day",
			],
			errorText: "Select worker's basic salary range",
		},
		{
			options: [
				{
					name: "companyEmail",
					label: "Company Email",
					errorText: "Enter an email",
				},
				{
					name: "companyName",
					label: "Company Name",
					errorText: "Enter company name",
				},
				{
					name: "companyUEN",
					label: "Company UEN",
					errorText: "Enter company UEN",
				},
				{
					name: "companyContactNumber",
					label: "Company Contact Number",
					errorText: "Enter a company number",
				},
			],
		},
	];

	const checkFieldInput = (currStep) => {
		let result;
		const index = currStep - 1;

		switch (currStep) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				if (userInput[qnList[index].name]) {
					result = true;
				} else {
					result = false;
				}
				break;
			case 6:
				if (
					userInput.companyEmail &&
					userInput.companyName &&
					userInput.companyUEN &&
					userInput.companyContactNumber &&
					termsCondition
				) {
					result = true;
				} else {
					result = false;
				}
				break;
		}
		return result;
	};
	const handleNextButton = () => {
		if (checkFieldInput(currentStep)) {
			setShowError(false);
			setCurrentStep(currentStep + 1);
		} else {
			setShowError(true);
		}
	};

	const handlePreviousButton = () => {
		setCurrentStep(currentStep - 1);
	};

	useEffect(() => {
		if (checkFieldInput(currentStep)) {
			setShowError(false);
		}
	}, [userInput]);

	let element;
	switch (currentStep) {
		case 1:
			element = (
				<StyledQuestionContainer>
					<form id="sidebox">
						<h1>{qnList[currentStep - 1].question}</h1>
						<p>{qnList[currentStep - 1].subheader}</p>
						<DropdownSelection
							name={qnList[currentStep - 1].name}
							label={qnList[currentStep - 1].label}
							userInput={userInput}
							setUserInput={setUserInput}
							options={qnList[currentStep - 1].options}
							error={showError}
							errorText={qnList[currentStep - 1].errorText}
						/>
					</form>
				</StyledQuestionContainer>
			);
			break;

		case 2:
			element = (
				<StyledQuestionContainer>
					<form id="sidebox">
						<h1>{qnList[currentStep - 1].question}</h1>
						<InputField
							label={qnList[currentStep - 1].label}
							name={qnList[currentStep - 1].name}
							userInput={userInput}
							setUserInput={setUserInput}
							inputType={"number"}
							error={showError}
							errorText={qnList[currentStep - 1].errorText}
						/>
					</form>
				</StyledQuestionContainer>
			);
			break;

		case 3:
		case 4:
		case 5:
			const updatedInput = { ...userInput };
			element = (
				<StyledQuestionContainer>
					<form id="sidebox">
						<h1>{qnList[currentStep - 1].question}</h1>
						<br></br>
						{qnList[currentStep - 1].options.map((item) => {
							return (
								<StyledRatioOption>
									<input
										className="radio-input-container"
										type="radio"
										name={qnList[currentStep - 1].name}
										onChange={(e) => {
											updatedInput[qnList[currentStep - 1].name] =
												e.target.value;
											setUserInput({ ...updatedInput });
										}}
										value={item}
										checked={userInput[qnList[currentStep - 1].name] === item}
										id={item}
									/>

									<label className="radio-input-text" htmlFor={item}>
										{item}
									</label>
								</StyledRatioOption>
							);
						})}
						{showError && (
							<span className="error-text">
								{qnList[currentStep - 1].errorText}
							</span>
						)}
					</form>
				</StyledQuestionContainer>
			);
			break;
		case 6:
			element = (
				<StyledQuestionContainer>
					<form id="sidebox">
						<h1>Company Details</h1>
						{qnList[currentStep - 1].options.map((item) => (
							<InputField
								label={item.label}
								name={item.name}
								userInput={userInput}
								setUserInput={setUserInput}
								inputType={"text"}
								error={showError}
								errorText={item.errorText}
							/>
						))}

						<div className="tc-flex-block">
							<div className="tc-checkbox">
								<input
									type="checkbox"
									name="termsCondition"
									value="termsCondition"
									onChange={() => setTermsCondition(!termsCondition)}
									checked={termsCondition}
								></input>
							</div>
							<div className="tc-textbox">
								<h4>Terms, Services & Privacy</h4>
								<p className="label-text">
									By using this website, you agree to our terms of service and
									privacy policy, which includes providing certain personal
									information that will be collected and used in accordance with
									the policy and safeguarded by appropriate security measures.
								</p>
							</div>
						</div>
					</form>
				</StyledQuestionContainer>
			);
			break;

		case 7:
			element = (
				<StyledQuestionContainer>
					<form id="sidebox">
						<h1>Thank you for onboarding with us</h1>
						<p>
							Before continuing, we need to verify your email address. Please
							check your inbox for a confirmation link.
						</p>
						<p>
							If you did not receive the email at {userInput.companyEmail}, we
							can <a className="link-text">resend it to you</a>
						</p>
					</form>
				</StyledQuestionContainer>
			);
			break;
	}

	return (
		<StyledMain>
			<ProgressBar currentStep={currentStep} />
			{element}

			<div className="fixed-buttons-container">
				{currentStep > 1 && (
					<StyledButton className="secondary" onClick={handlePreviousButton}>
						Previous
					</StyledButton>
				)}
				{currentStep < 8 && (
					<StyledButton className="main" onClick={handleNextButton}>
						{currentStep == 7 ? "Submit" : "Next"}
					</StyledButton>
				)}
			</div>
		</StyledMain>
	);
};
export default Registration;
