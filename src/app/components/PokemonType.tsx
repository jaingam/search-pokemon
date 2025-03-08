"use client"
import { useEffect, useState, } from "react"
import "../globals.css"

const PokemonType = ({ key, type }) => {
    const [className, setClassName] = useState(`w-fit rounded-full px-2 bg-${type.toLowerCase()} text-${type.toLowerCase()}`)
    console.log(className)
    useEffect(() => {
        setClassName(`w-fit rounded-full px-2 bg-${type.toLowerCase()} text-${type.toLowerCase()}`)
    }, [type])

    //Classnames have to be specific to be exported? This miight be a temporary fix.
    if (type == "Normal")
        return (

            <div key={key} className={`w-fit rounded-full px-2 bg-normal`}>
                {type}
            </div>
        );

    if (type == "Fire")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-fire`}>
                {type}
            </div>
        );
    if (type == "Water")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-water`}>
                {type}
            </div>
        );
    if (type == "Electric")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-electric`}>
                {type}
            </div>
        );

    if (type == "Grass")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-grass`}>
                {type}
            </div>
        );
    if (type == "Ice")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-ice`}>
                {type}
            </div>
        ); if (type == "Fighting")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-fighting`}>
                {type}
            </div>
        ); if (type == "Poison")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-poison`}>
                {type}
            </div>
        );
    if (type == "Ground")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-ground`}>
                {type}
            </div>
        );
    if (type == "Flying")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-flying`}>
                {type}
            </div>
        );

    if (type == "Psychic")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-psychic`}>
                {type}
            </div>
        );
    if (type == "Bug")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-bug`}>
                {type}
            </div>
        );
    if (type == "Ghost")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-ghost`}>
                {type}
            </div>
        );
    if (type == "Rock")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-rock`}>
                {type}
            </div>
        );
    if (type == "Dragon")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-dragon`}>
                {type}
            </div>
        );
    if (type == "Dark")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-dark`}>
                {type}
            </div>
        );
    if (type == "Steel")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-steel`}>
                {type}
            </div>
        );
    if (type == "Fairy")
        return (
            <div key={key} className={`w-fit rounded-full px-2 bg-fairy`}>
                {type}
            </div>
        );
    else return (
        <div key={key} className={className}>
            {type}
        </div>
    );
}

export default PokemonType;