const itemCard = ({title, prices, thumbnail}) => {
  const digialPurchasePrice = prices[1]

  return (
    
  <div className="card w-96 glass snap-center">
    <figure><img src={`${thumbnail.path}.${thumbnail.extension}`} alt="comics!" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
      </div>
  </div>
)}

export default itemCard

    /* <div className="card bg-primary text-primary-content w-200 h-auto snap-center scroll-smooth select-none opacity-80">
        <div className="card-body  ">
            <h2 className="card-title">{title}</h2>
            <p>{prices.map((price) => price.price)}</p>
                <div className="card-actions justify-end mt-3">
                    <button className="btn bg-neutral opacity-100">Watch now</button>
                </div>
        </div>
    </div> */
