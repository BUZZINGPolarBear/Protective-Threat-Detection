import React, { useState } from "react";
import * as Styled from "./Styles/styledMainFrame";
import { User, ChevronsLeft, ChevronsRight } from "lucide-react";

import main_logo from "../assets/MainFrame/main_logo.png";

export function MainFrame() {
	const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);

	return (
		<div>
			<Styled.Header>
				<Styled.LogoHorizontal src={main_logo}></Styled.LogoHorizontal>
				<Styled.UserIconWrapper>
					<User size={30} />
				</Styled.UserIconWrapper>
			</Styled.Header>
			<Styled.LeftPanel isOpen={isLeftPanelOpen}>
				<Styled.LeftPanelDiv
					onClick={() => setIsLeftPanelOpen(!isLeftPanelOpen)}
				>
					{isLeftPanelOpen ? (
						<ChevronsLeft size={24} />
					) : (
						<ChevronsRight size={24} />
					)}
				</Styled.LeftPanelDiv>
			</Styled.LeftPanel>
		</div>
	);
}
