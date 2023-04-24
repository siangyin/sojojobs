const InputField = ({
	label,
	name,
	userInput,
	setUserInput,
	inputType,
	error,
	errorText,
}) => {
	const updateInputOnChange = (e) => {
		const updatedInput = { ...userInput };
		updatedInput[name] =
			inputType == "number" ? Number(e.target.value) : e.target.value;
		setUserInput(updatedInput);
	};
	return (
		<>
			<label className="toplabel input-label" htmlFor={name}>
				{label}
			</label>
			<input
				className="input-container"
				type={inputType}
				name={name}
				onChange={updateInputOnChange}
				value={userInput[name]}
			/>
			{error && <span className="error-text">{errorText}</span>}
		</>
	);
};
export default InputField;
