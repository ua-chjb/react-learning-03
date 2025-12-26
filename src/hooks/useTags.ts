import { type IslandData } from "./useIslands";
import { useMemo } from "react";

const useTags = (islands: IslandData[]) => {
  const tags = useMemo(() => {
    return [...new Set(islands.flatMap((island) => island.tags || []))];
  }, [islands]);

  return tags;
};

export default useTags;
