import { useEffect, useRef, useState } from "react"
import { coins } from "../data/coins"
import { useForm } from "../hooks/useForm"
import { Button } from "./styles/Button.styled"
import { ContainerFlex } from "./styles/ContainerFlex"
import { getDataCripto } from "../helpers/getDataAPI"

export const Form = ({setMonedas}) => {

	const [criptos, setCriptos] = useState([]);

	const formRef = useRef();

	const { values, coin, cripto, handleInputChange} = useForm({
		coin: '',
		cripto: ''
	});

	const getInfoFromAPI = async () => {
		
		const { Data } = await getDataCripto();

		const arrayCriptos = Data.map(({ CoinInfo }) => {
			const objectCripto = {
				id: CoinInfo.Name,
				name: CoinInfo.FullName
			}

			return objectCripto;

		})

		setCriptos(arrayCriptos);

	}

	useEffect(() => {
		getInfoFromAPI();
	}, [])

	//También puedes poner coin, cripto

	// useEffect(() => {
	// 	setMonedas(values);
	// }, [values]);

	const handleSubmitForm = (e) => {
		e.preventDefault();
		setMonedas(values);

		setTimeout(() => {
			formRef.current.reset();
		}, 1000);

	}

	return (
		<>
			<form ref={formRef}>
				
				<h3>Elige tu Moneda</h3>
				<select
					onChange={handleInputChange}
					name="coin"
					value={coin}
				>
					{
						coins.map(coin => {
							return (
								<option key={coin.id} value={coin.id}>
									{coin.name}
								</option>
							)
						})
					}
				</select>

				<h3>Elige tu Criptomoneda</h3>
				<select
					onChange={handleInputChange}
					name="cripto"
					value={cripto}
				>
					{
						criptos.map(cripto => {
							return (<option key={cripto.id} value={cripto.id}>{cripto.name}</option>)
						})
					}
				</select>

				<ContainerFlex>
					<Button
						onClick={handleSubmitForm}
					>
						Cotizar
					</Button>
				</ContainerFlex>

			</form>
		</>
	)
}