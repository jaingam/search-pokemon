"use client"
import { Key, useEffect } from "react";
import "../globals.css"


const PokemonType = ({ key, type }) => {
    const className = `w-fit rounded-full px-2 bg-${type.toLowerCase()} text-${type.toLowerCase()}`
    console.log(type.toLowerCase()) 
    return (
        <div key={key} className={className}>
            {type}
        </div>
    );
}

export default PokemonType;