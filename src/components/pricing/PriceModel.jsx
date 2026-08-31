export default function PriceModel({item}) {
  const {type, price, tasks} = item
    return (
    <div className="priceTag">
      <div className="priceHead">
        <p>{type}
        <span>${price}</span>
        </p>

        <span>&rarr;</span>
      </div>
      <ul>
        {tasks.map((t, i)=><li key={i}>{t}</li>)}
      </ul>
    </div>
  )
}
