import styled from "styled-components";

const StyledDropdownSelection = styled.div`
	.toplabel {
		font: normal 400 12px/16px "Lexend";
		color: var(--SoJoBlue100);
		position: absolute;
	}

	& .dropdown-label {
		position: absolute;
		margin: 12px 0 0 12px;
		padding: 0 5px;
		background-color: white;
	}
	& select {
		border: var(--SoJoBlue100) 1px solid;
		width: 100%;
		height: 56px;
		font: normal 400 16px/24px "Lexend";
		margin-top: 20px;
		padding-left: 12px;
	}
`;

const DropdownSelection = ({
	name,
	label,
	userInput,
	setUserInput,
	options,
	error,
	errorText,
}) => {
	const updateInputOnChange = (e) => {
		const updatedInput = { ...userInput };
		updatedInput[name] = e.target.value;
		setUserInput(updatedInput);
	};

	return (
		<StyledDropdownSelection>
			<label className="toplabel dropdown-label" htmlFor={name}>
				{label}
			</label>
			<select
				name={name}
				className="dropdown-content"
				onChange={updateInputOnChange}
				value={userInput[name]}
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			{error && <span className="error-text">{errorText}</span>}
		</StyledDropdownSelection>
	);
};
export default DropdownSelection;
