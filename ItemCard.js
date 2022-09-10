const itemCard = ({title, prices, thumbnail, creators, images}) => {
  const digialPurchasePrice = prices[1]
  
  return (
    
  <div className="card w-96 glass snap-center">
    <figure><img src={`${thumbnail.path}.${thumbnail.extension}`} alt="comics!" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{creators.items[0].name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
      </div>
  </div>
)}

export default itemCard