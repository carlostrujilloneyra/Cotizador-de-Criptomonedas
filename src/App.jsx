import { useEffect, useState } from "react";
import { Form, Result, Spinner } from "./components";

export const App = () => {

  const [monedas, setMonedas] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!Object.values(monedas).includes('')) {

      // Aquí llamaremos a la API, pero pasandole parámetros
      const getCriptoCoins = async () => {

        const { coin, cripto } = monedas;

        if (coin === undefined || cripto === undefined) return;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${coin}`;


        const rpta = await fetch(url);
        const data = await rpta.json();

        setResult(data.DISPLAY[cripto][coin]);

        setLoading(true);

        setTimeout(() => {
          setLoading(false);
        }, 320);

      };

      getCriptoCoins();
    }
  }, [monedas]);

  return (
    <>
      <h1>Cotizador de Criptomonedas</h1>

      <div className="container-grid-quoter">
        <Form setMonedas={setMonedas} />
        
        <div>
          {loading && <Spinner />}
          {result.PRICE && (<Result {...result} />)}

          {/* Otra forma:
            {result.PRICE && (<Result result = {result} />)}
          */}

        </div>

      </div>
    </>
  );
};
