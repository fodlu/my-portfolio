function Testy({item}) {
  const index = 1
  return (
    <div className="testy">
      <div className="rating">
         <p>{item.rating}</p>
      </div>
      <p>{item.comment}</p>

      <div className="customer">
        <img src={`/image-${(index+1)}.jpg`} alt={item.name} />
        <p>{item.name} <span>{item.position}</span></p>
      </div>  
    </div>
 
  )
}

export default Testy
