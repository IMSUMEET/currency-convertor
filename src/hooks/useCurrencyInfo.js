// Custom hooks in react
import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        let urs  = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)
        .then((res) => res.json()) 
        .then((res) => setData(res[currency]));
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;