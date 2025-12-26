import type { IslandData } from "@/hooks/useIslands";

const SideSkeleton = () => {
  return (
    <ul className="pd-10 size-24">
        <li className="skeleton h-8 w-32 mb-3"></li>
        <li className="skeleton h-8 w-32 mb-3"></li>
        <li className="skeleton h-8 w-32 mb-3"></li>
        <li className="skeleton h-8 w-32 mb-3"></li>
        <li className="skeleton h-8 w-32 mb-3"></li>
        <li className="skeleton h-8 w-32 mb-3"></li>
        <li className="skeleton h-8 w-32 mb-3"></li>
        <li className="skeleton h-8 w-32 mb-3"></li>
        <li className="skeleton h-8 w-32 mb-3"></li>
        <li className="skeleton h-8 w-32 mb-3"></li>
    </ul>
  );
};

export default SideSkeleton;