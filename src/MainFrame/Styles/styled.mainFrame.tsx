import { colorTokens } from "../../tokens/colors";
import { styled } from "styled-components";

export const Header = styled.header`
	background-color: ${colorTokens.main_green_40};
	display: flex;
	align-items: center;
	color: ${colorTokens.main_black};
	padding: 1rem;
	height: 50px;
`;

export const UserIconWrapper = styled.div`
	margin-left: auto;
`;
