
import "../globals.css"

const PokemonType = ({  type }) => {
    const className  = `w-fit rounded-full px-3 bg-${type.toLowerCase()} text-${type.toLowerCase()}`;

    //Classnames have to be specific to be exported? This might be a temporary fix.

    if (type == "Normal")
        return (
            <div className={`w-fit rounded-full px-3 bg-normal text-white`}>
                {type}
            </div>
        );

    if (type == "Fire")
        return (
            <div  className={`w-fit rounded-full px-3 bg-fire`}>
                {type}
            </div>
        );
    if (type == "Water")
        return (
            <div  className={`w-fit rounded-full px-3 bg-water text-white`}>
                {type}
            </div>
        );
    if (type == "Electric")
        return (
            <div  className={`w-fit rounded-full px-3 bg-electric`}>
                {type}
            </div>
        );

    if (type == "Grass")
        return (
            <div  className={`w-fit rounded-full px-3 bg-grass`}>
                {type}
            </div>
        );
    if (type == "Ice")
        return (
            <div  className={`w-fit rounded-full px-3 bg-ice`}>
                {type}
            </div>
        ); if (type == "Fighting")
        return (
            <div className={`w-fit rounded-full px-3 bg-fighting text-white`}>
                {type}
            </div>
        ); if (type == "Poison")
        return (
            <div className={`w-fit rounded-full px-3 bg-poison text-white`}>
                {type}
            </div>
        );
    if (type == "Ground")
        return (
            <div className={`w-fit rounded-full px-3 bg-ground`}>
                {type}
            </div>
        );
    if (type == "Flying")
        return (
            <div className={`w-fit rounded-full px-3 bg-flying`}>
                {type}
            </div>
        );

    if (type == "Psychic")
        return (
            <div className={`w-fit rounded-full px-3 bg-psychic`}>
                {type}
            </div>
        );
    if (type == "Bug")
        return (
            <div className={`w-fit rounded-full px-3 bg-bug`}>
                {type}
            </div>
        );
    if (type == "Ghost")
        return (
            <div className={`w-fit rounded-full px-3 bg-ghost text-white`}>
                {type}
            </div>
        );
    if (type == "Rock")
        return (
            <div className={`w-fit rounded-full px-3 bg-rock`}>
                {type}
            </div>
        );
    if (type == "Dragon")
        return (
            <div className={`w-fit rounded-full px-3 bg-dragon text-white`}>
                {type}
            </div>
        );
    if (type == "Dark")
        return (
            <div className={`w-fit rounded-full px-3 bg-dark  text-white`}>
                {type}
            </div>
        );
    if (type == "Steel")
        return (
            <div className={`w-fit rounded-full px-3 bg-steel`}>
                {type}
            </div>
        );
    if (type == "Fairy")
        return (
            <div className={`w-fit rounded-full px-3 bg-fairy`}>
                {type}
            </div>
        );
    else return (
        <div className={className}>
            {type}
        </div>
    );
}

export default PokemonType;