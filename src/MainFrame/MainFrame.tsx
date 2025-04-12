import { useState } from "react";
import * as Styled from "./Styles/styledMainFrame";
import { User, ChevronsLeft, ChevronsRight } from "lucide-react";

import main_logo from "../assets/MainFrame/main_logo.png";

export function MainFrame() {
	const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
	const [selectedMenu, setSelectedMenu] = useState("CI_Detector");

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
				<Styled.LeftPanelBtn
					isSelected={selectedMenu === "CI_Detector"}
					onClick={() => setSelectedMenu("CI_Detector")}
				>
					예방적 코드 분석
				</Styled.LeftPanelBtn>
				<Styled.LeftPanelBtn
					isSelected={selectedMenu === "History"}
					onClick={() => setSelectedMenu("History")}
				>
					탐지 결과 조회
				</Styled.LeftPanelBtn>
			</Styled.LeftPanel>
		</div>
	);
}
