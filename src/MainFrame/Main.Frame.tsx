import React from "react";
import * as Styled from "./Styles/styled.mainFrame";
import { User } from "lucide-react";

export function MainFrame() {
	return (
		<div>
			<Styled.Header>
				<Styled.UserIconWrapper>
					<User size={24} />
				</Styled.UserIconWrapper>
			</Styled.Header>
			<p>Welcome to PTD!</p>
			<p>This is the main frame of the application.</p>
		</div>
	);
}
