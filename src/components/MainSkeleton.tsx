const MainSkeleton = () => {
  return (
    <div className="card-border rounded-box shadow-sm overflow-hidden">
        <div className="skeleton h-64 w-full rounded-box">

        </div>
        <div className="card-body">
            <h2 className="skeleton card-title"></h2>
            <p className="skeleton"></p>
            <div className="skeleton flex flex-wrap gap-2">
                <div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
            </div>
        </div>
    </div>
  )
}

export default MainSkeleton