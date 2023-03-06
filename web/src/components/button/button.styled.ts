import styled from "styled-components";

export const ButtonWrapper = styled.button`
border: none;
	min-width: 10rem;
	outline: none;
	background: var(--primary);
	color: var(--black);
	height: 4.8rem;
	border-radius: 5rem;
	font-size: 1.6rem;
	font-weight: 700;
	cursor: pointer;
	padding: 1rem 2rem;
	transform: scale(1);
	transition: all 0.1s;

    &:hover {
		transform: scale(1.05);
	}

	&:focus-visible {
		outline: 1px solid var(--black);
	}
`