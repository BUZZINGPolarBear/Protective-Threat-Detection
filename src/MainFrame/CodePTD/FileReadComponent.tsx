import { useState } from "react";
import * as Styled from "./Styles/StylesFileReadComponent";

//components
import { PTDstageComponent } from "./PTDstageComponent";

export function FileReadComponent() {
	return (
		<Styled.FileReadWrapper>
			<PTDstageComponent></PTDstageComponent>
		</Styled.FileReadWrapper>
	);
}
