const itemCard = ({title,opening_crawl}) => {
  return (
    <div className="card bg-primary text-primary-content w-200 h-auto snap-center scroll-smooth select-none opacity-80">
        <div className="card-body  ">
            <h2 className="card-title">{title}</h2>
            <p>{opening_crawl}</p>
                <div className="card-actions justify-end mt-3">
                    <button className="btn bg-neutral opacity-100">Watch now</button>
                </div>
        </div>
    </div>
  )
}
export default itemCard