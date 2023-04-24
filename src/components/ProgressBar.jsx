import styled from "styled-components";

const StyledProgressBar = styled.div`
	.progress-bar-full {
		background-color: var(--SoJoGrey60);
		display: block;
		border-radius: 16px;
	}

	.progress-bar-value {
		background-color: var(--SoJoBlue100);
		height: 8px;
		border-radius: 16px;
		margin-top: 8px;
	}
`;

const ProgressBar = ({ currentStep }) => {
	const barValue = (currentStep / 7) * 100;

	return (
		<StyledProgressBar>
			<p className="label-text">{`Step ${currentStep} of 7`}</p>
			<div className="progress-bar-full">
				<div
					className="progress-bar-value"
					style={{ width: `${barValue}%` }}
				></div>
			</div>
		</StyledProgressBar>
	);
};
export default ProgressBar;
