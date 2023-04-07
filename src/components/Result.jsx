import { ContainerFlex } from "./styles/ContainerFlex";

export const Result = ({ result }) => {

	const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE} = result;

	return (
		<>
			<div>
				<h3 style={{marginBottom: 24}}>Resultado</h3>
				<p>Precio: <span className="bold">{PRICE}</span></p>
				<p>Precio más bajo: <span className="bold">{LOWDAY}</span></p>
				<p>Precio más alto: <span className="bold">{HIGHDAY}</span></p>
				<p>Última actualización: <span className="bold">{LASTUPDATE}</span></p>
				<p>Imagen:</p>
				
				<ContainerFlex>
					<img src={`https://cryptocompare.com/${IMAGEURL}`} alt="image-cripto" />
				</ContainerFlex>

			</div>
		</>
	)
}