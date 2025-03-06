'use client'
import { useLazyQuery, useQuery } from "@apollo/client";
import { POKEMON } from "../queries";
import Image from "next/image";

const Result = ({ searchParam }) => {
    const { loading, data, refetch } = useQuery(POKEMON, { variables: { name: searchParam.name } });

    return (
        <div>
            {data?.pokemon && <div className="w-[760px] h-[360px] border-2 flex flex-row">
                <div className="w-[360px] h-[360px]  relative">
                    <Image alt={data?.pokemon?.name} src={data?.pokemon?.image} fill />
                </div>
                <div className="w-[400px] h-[360px] border-2 flex flex-col">
                    {/* {data?.pokemon?.id} */}

                    {data?.pokemon?.number} {data?.pokemon?.name}
                    Weight {data?.pokemon?.weight.minimum} - {data?.pokemon?.weight.maximum}
                    Height {data?.pokemon?.height.minimum} - {data?.pokemon?.height.maximum}

                    {data?.pokemon?.classification}
                    {data?.pokemon?.types}

                    {data?.pokemon?.resistant}

                    Weaknesses {data?.pokemon?.weaknesses}

                    Flee rate {data?.pokemon?.fleeRate}

                    maxCP {data?.pokemon?.maxCP}
                    maxHP {data?.pokemon?.maxHP}Í

                </div>
            </div>
            }
        </div>
    );
}

export default Result;