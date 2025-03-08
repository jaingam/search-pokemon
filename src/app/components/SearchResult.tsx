import { POKEMON } from "../queries/queries";
import Image from "next/image";
import Link from "next/link";
import { query } from "../apollo/ApolloClient";
import { Key } from "react";
import PokemonType from "./PokemonType";

const SearchResult = async ({ searchParam }) => {
    // const { loading, data, refetch } = useQuery(POKEMON, { variables: { name: searchParam.name } });
    const { loading, data, error } = await query({ query: POKEMON, variables: { name: searchParam.name } })
    // const [ loading, data, error ] = [true,{pokemon:{name:"",number:"",fleeRate:0,maxHP:0,maxCP:0,classification:"",types:[],resistant:[],weaknesses:[],weight:{minimum:0,maximum:0},
    // height:{minimum:0,maximum:0},image:"",attacks:{fast:[],special:[],},evolutions:[]}},{message:""}]
    //Next.js recommended fetching data on the server first

    return (
        <div className="font-medium flex flex-col gap-8">
            {loading &&
                <div className="w-80 sm:w-[560px] md:w-[662px] lg:w-[800px] h-[400px] shadow-custom border-2 rounded-3xl overflow-clip bg-palette-cream-1 flex flex-col self-center">
                    <div className=" h-16 w-full rounded-t-3xl px-6 content-center">

                    </div>

                    <div className="fill-foreground bg-foreground h-0.5 w-full" />
                    <div className="h-full w-full  rounded-b-3xl flex flex-row items-center justify-center text-4xl">
                        Loading...
                    </div>
                </div>
            }
            {!loading && data?.pokemon === null &&
                <div className="w-80 sm:w-[560px]  md:w-[662px] lg:w-[800px] h-[400px] shadow-custom border-2 rounded-3xl overflow-clip bg-palette-cream-1 flex flex-col  self-center">
                    <div className=" h-16 rounded-t-3xl px-6 content-center">

                    </div>

                    <div className="fill-foreground bg-foreground h-0.5 w-full" />
                    <div className="h-full w-full rounded-b-3xl flex flex-row items-center justify-center text-4xl">
                        Not Found</div>
                </div>}
            {!loading && error !== null && error !== undefined &&
                <div className="w-80 sm:w-[560px]  md:w-[662px] lg:w-[800px] h-[400px] shadow-custom border-2 rounded-3xl overflow-clip bg-palette-cream-1 flex flex-col self-center">
                    <div className=" h-16 w-full rounded-t-3xl px-6 content-center">

                    </div>
                    <div className="fill-foreground bg-foreground h-0.5 w-full" />
                    <div className="h-full w-full rounded-b-3xl flex flex-row items-center justify-center text-4xl">
                        Error: {error.message}
                    </div>
                </div>}

            {data?.pokemon &&
                <div className="w-80 sm:w-[560px] md:w-[662px] lg:w-[800px] md:h-[400px] shadow-custom border-2 rounded-3xl overflow-clip bg-palette-cream-1 flex flex-col self-center">
                    <div className=" h-16 w-full bg-palette-orange px-6 content-center text-3xl">
                        {data?.pokemon?.number} {data?.pokemon?.name}
                    </div>

                    <div className="fill-foreground bg-foreground h-0.5 w-full" />
                    <div className="h-full w-full rounded-b-3xl flex flex-col overflow-y-scroll sm:overflow-y-clip md:flex-row">
                        <div className="flex-none w-full h-80 md:w-[336px] md:h-[336px] bg-white flex items-center justify-center">
                            <div className="w-[280px] h-[280px] relative">
                                <Image alt={data?.pokemon?.name} src={data?.pokemon?.image} fill />
                            </div>
                        </div>

                        <div className="fill-foreground bg-foreground w-0.5 h-full" />
                        <div className="flex-1 w-full h-full flex flex-col sm:overflow-y-scroll">

                            <div className="fill-foreground bg-foreground h-0.5 w-full min-w-full md:invisible" />
                            <div className="w-full h-10 px-4 py-2 flex flex-row items-center text-xl">
                                {data?.pokemon?.classification}
                                <div className="hidden sm:flex flex-row">
                                    {data?.pokemon?.types.map((type: string, index: Key) => (
                                        <PokemonType key={index} type={type} />
                                    ))}
                                </div>
                            </div>
                            <div className="sm:hidden fill-foreground bg-foreground h-0.5 min-h-0.5 w-full min-w-full" />
                            <div className="sm:hidden h-10 px-4 py-2 flex flex-row gap-2 content-between items-center">
                                {data?.pokemon?.types.map((type: string, index: Key) => (
                                    <PokemonType key={index} type={type} />
                                ))}
                            </div>
                            <div className="fill-foreground bg-foreground h-0.5 min-h-0.5 w-full" />
                            <div className="w-full sm:h-10 px-4 py-2 flex flex-row justify-between  items-center text-xl">
                                <span>Weight</span><span>{data?.pokemon?.weight.minimum} - {data?.pokemon?.weight.maximum}</span>
                            </div>
                            <div className="fill-foreground bg-foreground h-0.5 min-h-0.5 w-full" />
                            <div className="w-full sm:h-10 px-4 py-2 flex flex-row justify-between items-center text-xl">
                                <span>Height </span><span>{data?.pokemon?.height.minimum} - {data?.pokemon?.height.maximum}</span>
                            </div>
                            <div className="fill-foreground bg-foreground h-0.5 min-h-0.5 w-full" />

                            <div className="w-full sm:h-10 px-4 py-2 flex flex-row justify-between items-center text-xl">
                                <div className="flex flex-row gap-x-1">
                                    <span>Flee rate</span><Image width={24} height={24} src="https://cdn-icons-png.flaticon.com/512/12414/12414771.png" alt="wind" />
                                </div>
                                <span>{data?.pokemon?.fleeRate}</span>
                            </div>
                            <div className="fill-foreground bg-foreground h-0.5 min-h-0.5 w-full" />
                            <div className="w-full sm:h-10 px-4 py-2 flex flex-row justify-between items-center text-xl">
                                <div className="flex flex-row gap-x-1">
                                    <span>Max CP</span><Image width={28} height={28} src="https://img.icons8.com/color/48/minecraft-sword.png" alt="minecraft-sword" />
                                </div>
                                <span>{data?.pokemon?.maxCP}</span>
                            </div>
                            <div className="fill-foreground bg-foreground h-0.5 min-h-0.5 w-full" />
                            <div className="w-full sm:h-10 px-4 py-2 flex flex-row justify-between items-center text-xl">
                                <div className="flex flex-row gap-x-1">
                                    <span>Max HP</span><Image width={28} height={28} src="https://cdn-icons-png.flaticon.com/512/8236/8236748.png" alt="heart" />
                                </div>
                                <span>{data?.pokemon?.maxHP}</span>
                            </div>
                            <div className="fill-foreground bg-foreground h-0.5 min-h-0.5 w-full" />
                            <div className="px-4 py-2 flex flex-row flex-wrap gap-2 content-between items-center text-xl">
                                Resistant
                                {data?.pokemon?.resistant.map((type: string, index: Key) => (
                                    <PokemonType key={index} type={type} />
                                ))}
                            </div>
                            <div className="px-4  py-2 flex flex-row flex-wrap gap-2 content-between items-center text-xl">
                                Weaknesses
                                {data?.pokemon?.weaknesses.map((type: string, index: Key) => (
                                    <PokemonType key={index} type={type} />
                                ))}

                            </div>
                            <div className="px-4  py-2 flex flex-row flex-wrap gap-2 content-between items-center text-xl">
                                Attacks
                                {data?.pokemon?.attacks.fast.map((attack: { name: string, type: string, damage: string }, index: Key) => (
                                    <div key={index} className="flex flex-col bg-palette-light-blue gap-y-1 p-1 px-2.5 border-2 text-base text-center justify-center items-center">
                                        <div>
                                            {attack.name}
                                        </div>
                                        <div>
                                            Dmg {attack.damage}
                                        </div>
                                        <PokemonType key={index} type={attack.type} />
                                    </div>
                                ))}
                                {data?.pokemon?.attacks.special.map((attack: { name: string, type: string, damage: string }, index: Key) => (
                                    <div key={index} className="flex flex-col bg-palette-light-blue gap-y-1 p-1 px-2.5 border-2 text-base text-center  justify-center items-center">
                                        <div className="flex flex-row gap-x-1">
                                            {attack.name} <svg xmlns="http://www.w3.org/2000/svg" fill="#F2C327" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            Dmg {attack.damage}
                                        </div>
                                        <PokemonType key={index} type={attack.type} />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            }
            {
                data?.pokemon?.evolutions &&
                <div className="flex flex-row w-screen gap-8 overflow-x-scroll px-8 justify-center content-around">
                    {data?.pokemon?.evolutions?.map((evoPoke: { name: string, number: string, image: string }, index: number) => (
                        <Link href={`/?name=${evoPoke.name}`} key={index} >
                            <div className="w-80 md:w-[336px] shadow-custom mb-4 border-2 rounded-3xl overflow-clip bg-palette-cream-1 flex flex-col">
                                <div className=" h-16 w-full bg-palette-orange px-6 flex flex-row items-center center text-3xl">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#F2C327" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>

                                    {evoPoke.number} {evoPoke.name}
                                </div>

                                <div className="fill-foreground bg-foreground h-0.5 w-full" />
                                <div className="w-80 h-80 md:w-[336px] md:h-[336px] bg-white flex items-center justify-center">
                                    <div className="w-[280px] h-[280px] relative">
                                        <Image alt={evoPoke.name} src={evoPoke.image} fill />
                                    </div>

                                </div>
                            </div>
                        </Link>
                    ))
                    }
                </div>
            }
        </div>
    );
}

export default SearchResult;