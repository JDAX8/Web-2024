import './CatCard.css'
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";

export function CatCard({ image = "", fact = "", Clicked }) {
    const [subrayadoFact, setSubrayadoFact] = useState("");

    useEffect(() => {
        if (fact) {
            const palabras = fact.split(" ");
            const primerasCuatroPalabras = palabras.slice(0, 4).join(" ");
            setSubrayadoFact(primerasCuatroPalabras);
        }
    }, [fact]);

    const handleClick = () => Clicked()

    return (
        <div className="all">
            <div className="card">
                <img className="image" src={image} alt="Cat" />
                <div className="card__content">
                    <p className="card__title">CAT FACT</p>
                    <p className="card__description">
                        {subrayadoFact && <span className="subrayado">{subrayadoFact}</span>}
                        {subrayadoFact && " "}
                        {fact.slice(subrayadoFact.length)}
                    </p>
                </div>
            </div>
            <Button title='Get New fact' Clicked={handleClick} />
        </div>
    );
}
