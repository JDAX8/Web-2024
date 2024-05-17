import React, { useState } from "react";
import { useGif } from '../../hooks/useGif';
import { InputSearch, Results } from "../../components";
import { Link } from 'react-router-dom'

export function Dashboard() {
    const { handleOnChange, addFavorite, onSubmit, data, searchWord, loading} = useGif()

  return (
    <main className=' justify-start items-center w-full h-full'>
        <h1 className=' font-bold mt-10'>Gif Search App</h1>
        <Link to="/favorites">
        <button className="mt-5">Go to Favorites</button>
        </Link>
        <InputSearch handleInputChange={handleOnChange} />
        <Results data={data} searchWord={searchWord} loading={loading} addFavorite={addFavorite}/>
    </main>
  )
}