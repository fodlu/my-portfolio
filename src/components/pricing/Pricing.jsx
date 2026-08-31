import Goto from "../goto/Goto";
import PriceModel from "./PriceModel";
import Tags from "../Tags";
import './pricing.css'

export default function Pricing() {
    const pricetags = [
        {'type': 'hourly',
            'price': 80,
            'tasks': ['Lorem ipsum dolor ', 'Distinctio exercitationem,', 'laborum cupiditate, aliquam', 'nostrum delectus. Explicabo ']
        },
        {'type': 'monthly',
            'price': 300,
            'tasks': ['Lorem ipsum dolor ', 'Distinctio exercitationem,', 'laborum cupiditate, aliquam', 'nostrum delectus. Explicabo ']
        },
        {'type': 'quaterly',
            'price': 1500,
            'tasks': ['Lorem ipsum dolor ', 'Distinctio exercitationem,', 'laborum cupiditate, aliquam', 'nostrum delectus. Explicabo ']
        },
    ]
  return (
    <div className="pricing">
      <Tags>Pricing Table</Tags>
      <div className="head">
        <p>My <span>Pricing Model</span></p>
        <Goto>Get Started</Goto>
      </div>

      <div className="prices">
        {pricetags.map((item, index)=> <PriceModel item={item} key={index} />)}
      </div>
    </div>
  )
}
