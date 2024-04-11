import React, {useEffect, useState} from "react";
import { fetchCatFacts } from "../services/fetch-fact";

export function CatSentence() {
    const [dataGato, setDataGato] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const catFacts  = await fetchCatFacts();
            setDataGato(catFacts);
    }
    fetchData();
}, []);

    return (
    <main>
        <p>HOLA</p>
        <ul>
            {dataGato.map((factObj, index) => (
            <li key={index}>{factObj.fact}</li>
            ))}
        </ul>
    </main>
    );
}