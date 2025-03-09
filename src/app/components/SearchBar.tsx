"use client"
import Image from "next/image";
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

        <div className="bg-white flex flex-row w-80 sm:w-[560px] md:w-[662px] lg:w-[800px] border-2 rounded-3xl px-2 py-1 text-2xl items-center shadow-custom">
            <input className="w-full outline-0"
                onKeyDown={(e) => {
                    if (e.key === 'Enter')
                        handleSearch(e.currentTarget.value);
                }}

                defaultValue={searchParams.get('name')?.toString()}
                placeholder="Search a pokemon, press Enter..."
                name="search-field"
            />
                 <Image width={24} height={24} src="https://cdn-icons-png.flaticon.com/512/7734/7734281.png" alt="search" />
                                                  
        </div>
    );
}

export default SearchBar;