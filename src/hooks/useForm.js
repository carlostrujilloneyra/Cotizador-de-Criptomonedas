import { useState } from "react";

export const useForm = (initialState = {}) => {

	const [values, setValues] = useState(initialState);

	// Aquí surge la magia
	const handleInputChange = ({ target }) => {
		
		const { name, value } = target;
		setValues({
			...values,
			[name]: value
		});
	}

	const { coin, cripto } = values;

	return {
		values,
		coin,
		cripto,
		handleInputChange
	}

}