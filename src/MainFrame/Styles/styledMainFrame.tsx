import { colorTokens } from "../../tokens/colors";
import { styled } from "styled-components";
import { LeftPanelProps } from "./interfaceMainFrame";

export const Header = styled.header`
	// background-color: ${colorTokens.main_black_20};
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${colorTokens.main_black};
	padding: 1rem;
	height: 50px;
`;

export const LogoHorizontal = styled.img`
	height: 40px;
	object-fit: contain;
`;

export const UserIconWrapper = styled.div`
	margin-left: auto;
`;

export const LeftPanel = styled.div<LeftPanelProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flext-start;

	padding-right: 10px;
	background-color: ${colorTokens.main_green_20};
	width: ${(props) => (props.isOpen ? "180px" : "60px")};
	height: 100vh;
	transition: width 0.3s ease-in-out;
	display: flex;
	flex-direction: column;
`;

export const LeftPanelDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	height: 50px;
	transition: width 0.3s ease-in-out;
	cursor: pointer;
`;
