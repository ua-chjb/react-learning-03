import SearchInput from "./SearchInput"

interface SearchProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: SearchProps) => {
  return (
    <div className="navbar">
        <img src="public/vite.svg" alt="logo" className="img" />
        <SearchInput onSearch={onSearch}/>
    </div>
  )
}

export default NavBar