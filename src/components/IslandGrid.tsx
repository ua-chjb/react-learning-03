import IslandCard from "./IslandCard";
import MainSkeleton from "./MainSkeleton";
import { type IslandData } from "../hooks/useIslands";

interface Props {
  islands: IslandData[];
  error: string;
  isLoading: boolean;
}

const IslandGrid = ({ islands, error, isLoading }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    <>
      {error && <p className="text-error">{error}</p>}
      <div className="grid g-content gap-4 mn-lr-10">
        {isLoading
          ? skeletons.map((s) => <MainSkeleton key={s} />)
          : islands.map((i) => <IslandCard key={i.code} island={i} />)}
      </div>
    </>
  );
};

export default IslandGrid;
