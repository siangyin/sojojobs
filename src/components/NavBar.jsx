import logo from "../assets/logo_negative.png";
import styled from "styled-components";

const StyledNav = styled.nav`
	background-color: var(--SoJoBlue100);
	height: 94px;
	display: flex;
	align-items: center;
	box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.03);

	#nav-logo {
		height: 61px;
		margin-left: 40px;
	}
`;

const NavBar = () => {
	return (
		<StyledNav>
			<img src={logo} alt="logo" id="nav-logo"></img>
		</StyledNav>
	);
};
export default NavBar;
