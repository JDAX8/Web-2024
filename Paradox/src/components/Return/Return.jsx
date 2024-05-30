import React from 'react'
import './Return.css'
import arrow from '../../assets/imgs/arrow.png'
import { Link } from 'react-router-dom';



export const Return = () => {
    return (
        <Link to='/'>
            <button><img className="arrow" src={arrow} alt="" /></button>
        </Link>
    )
}