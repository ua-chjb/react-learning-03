import type { IslandData } from "../hooks/useIslands"
import MyImage from "../assets/fortnite-img.png"

interface Props {
    island: IslandData
}

const IslandCard = ({island} : Props) => {
  return (
    <div className="card-border rounded-box shadow-sm overflow-hidden">
        <figure>
            <img 
                src={MyImage}
                alt="template island image"
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{island.code}</h2>
            <p>{island.title}</p>
            <div className="flex flex-wrap gap-2">
                {island.tags?.map((tag) => (
                    <span key={tag} className="badge badge-primary">{tag}</span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default IslandCard