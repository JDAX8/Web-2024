import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useGif } from '../../hooks/useGif';
import { Card } from "../../components";

export function Favorites() {

    const { favoritos} = useGif()

  return (
    <main className=' justify-start items-center w-full h-full'>
      <h1 className=' font-bold mt-10'>Favorite Gifs</h1>
        <Link to="/">
        <button className="mt-5">Go Back</button>
        </Link>
        <div className="flex flex-wrap justify-center mt-10">
              {favoritos.map((datos) => (
                <div key={crypto.randomUUID()} className='flex p-5'>
                <Card key={crypto.randomUUID()} gif={datos.gif} text={datos.text}/>
                </div>
              ))}
        </div>
    </main>
  )
}