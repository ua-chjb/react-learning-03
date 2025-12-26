import useTags from "../hooks/useTags";
import type { IslandData } from "../hooks/useIslands";
import SideSkeleton from "./SideSkeleton";

interface Props {
  islands: IslandData[];
  isLoading: boolean;
  onSelectTag: (tag: string | null) => void;
}


const TagList = ({ islands, isLoading, onSelectTag }: Props) => {
  const tags = useTags(islands);

  if (isLoading) return <SideSkeleton/>

  return (
    <div className="grid pd-10 size-24">
      <button 
        onClick={() => onSelectTag(null)}
        className="text-left cursor-pointer hover:underline w-full pd-tb-5">
         all
      </button>
      {tags.map((tag) => (
        <button 
          onClick={() => onSelectTag(tag)} 
          key={tag} 
          className="text-left cursor-pointer hover:underline w-full pd-tb-5">
            {tag}
        </button>
      ))}
    </div>
  );
};

export default TagList;
