import { useRef } from "react";
import SearchIcon from "../icons/Icons"

export interface SearchProps {
    onSearch: (searchText: string) => void;
}


const SearchInput = ({onSearch} : SearchProps) => {
   const ref = useRef<HTMLInputElement>(null);

  return (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) onSearch(ref.current.value);
        }}
        className="ml-6 w-full"
    >
        <label className="input validator rounded-full w-full">
            <SearchIcon/>
            <input
                ref={ref}
                type="text" 
                placeholder="search..."
            />
        </label>
    </form>
  )
}

export default SearchInput