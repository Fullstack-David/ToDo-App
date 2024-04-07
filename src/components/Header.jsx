import React from 'react'
import  { Link } from "react-router-dom"

export default function Header({title}) {
    return (
        <Link to={"/"}>
            <header className='Header'>
                <h1 className='div-container-header'>{title}</h1>
            </header>
        </Link>
    );
}
