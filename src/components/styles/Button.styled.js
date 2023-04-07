import styled from "styled-components";

export const Button = styled.button`
	  cursor: pointer;
		font-weight: bolder;
		font-size: 1.5rem;
		text-transform: uppercase;
		/* color: white; */
		color: ${({danger}) => danger ? 'red': 'white'};
		background-color: var(--colorButton);
		padding: 1rem 2rem;
		border-radius: .4rem;
		border: none;
		outline: none;
		transition: all .4s;
		margin-top: 2rem;
		width: 100%;

		&:hover{
			filter: brightness(1.3);
			transition: all .4s;
		}
`;

export const ButtonDanger = styled(Button)`
	/* Estilos que deseas añadir */
	background-color: red;
	color: white;
`;
