"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation.js";
import { useDebouncedCallback } from 'use-debounce';
const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
  
    const handleSearch = useDebouncedCallback((term: string)=> {
        const params = new URLSearchParams(searchParams);
   
        if (term) {
            params.set('name', term);
        } else {
            params.delete('name');
        }

    replace(`${pathname}?${params.toString()}`);
    }, 500)
    return (

        <div>
            <input
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            defaultValue={searchParams.get('name')?.toString()}
            placeholder="Search a pokemon..."
            name="search-field"
            />
            <button
                type="submit"
                // onClick={() => {
                //     loadPokemon();
                //     // console.log(data);
                //     setResultCallback(data);
                // }}
                className="w-5 h-5 bg-orange-400"
            />

        </div>
    );
}

export default SearchBar;