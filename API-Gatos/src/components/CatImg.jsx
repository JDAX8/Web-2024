import React, {useEffect, useState} from "react";
import { fetchCatImg } from "../services";

export function CatImg() {
    const [dataGatoImg, setDataGatoImg] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const catImgData  = await fetchCatImg();
            setDataGatoImg(catImgData);
    }
    fetchData();
}, []);

    return (
    <main>
        <p>HOLA</p>
        <ul>
            {dataGatoImg.map((factObj, e) => (
            <img key={e} src={factObj.fact} alt="" />
            ))}
        </ul>
    </main>
    );
}