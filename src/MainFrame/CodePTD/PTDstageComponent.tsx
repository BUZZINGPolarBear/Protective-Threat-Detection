import { useState, useEffect } from "react";
import * as Styled from "./Styles/StylesPTDstage";

export function PTDstageComponent() {
	return (
		<Styled.ProgressWrapper>
			<Styled.ProgressLine>
				<Styled.Step active>1</Styled.Step>
				<Styled.Step>2</Styled.Step>
				<Styled.Step>3</Styled.Step>
				<Styled.Step>4</Styled.Step>
			</Styled.ProgressLine>
		</Styled.ProgressWrapper>
	);
}
