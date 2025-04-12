import { colorTokens } from "../../../tokens/colors";
import { styled } from "styled-components";

export const ProgressWrapper = styled.div`
	position: relative;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;

	background-color: ${colorTokens.main_black_10};
`;

export const ProgressLine = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	top: 50%;
	left: 0;
	right: 0;
	height: 2px;
	background: #ccc;
	z-index: 0;
`;

export const Step = styled.div<{ active?: boolean }>`
	position: relative;
	z-index: 1;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background: ${(props) => (props.active ? "#00796B" : "#ccc")};
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
`;
