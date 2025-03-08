"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation.js";
const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('name', term);
        } else {
            params.delete('name');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (

        <div className="bg-white flex flex-row w-80 sm:w-[560px] md:w-[662px] lg:w-[800px] border-2 rounded-3xl px-2 py-1">
            <input className="w-full"
                onKeyDown={(e) => {
                    if (e.key === 'Enter')
                        handleSearch(e.currentTarget.value);
                }}
                defaultValue={searchParams.get('name')?.toString()}
                placeholder="Search a pokemon, press Enter..."
                name="search-field"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>


        </div>
    );
}

export default SearchBar;