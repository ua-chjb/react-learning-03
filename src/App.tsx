import { useState } from "react";
import NavBar from "./components/NavBar";
import IslandGrid from "./components/IslandGrid";
import TagList from "./components/TagList";
import useIslands from "./hooks/useIslands";

function App() {
  const {islands, error, isLoading} = useIslands();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const filteredIslands = islands
    .filter((island) => selectedTag ? island.tags?.includes(selectedTag) : true)
    .filter((island) => island.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <>
      <div className="grid g-main">
        <div className="g-main-nav mn-10">
          <NavBar onSearch={setSearchText}></NavBar>
        </div>  
        <div className="g-main-side mn-r-10">  
          <TagList 
            islands={islands} 
            isLoading={isLoading}
            onSelectTag={setSelectedTag}
          >
          </TagList>
        </div>
        <div className="g-main-content">
          <IslandGrid
            islands={filteredIslands}
            error={error}
            isLoading={isLoading}
          >
          </IslandGrid>
        </div>
      </div>
    </>
  );
}

export default App
