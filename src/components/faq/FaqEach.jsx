import { useState } from "react";

export default function FaqEach({item}) {

const {question, answer} = item;
const [isOpen, setIsOpen] = useState(false)


return (
    <div className="faq" onClick={()=>setIsOpen(!isOpen)}>
        <div className="question">
            <p>{question}</p>
            <p>{!isOpen ? '+' : '-'}</p>
        </div>
    {isOpen && <div className="answer">{answer}</div>
    }
      
    </div>
  )
}
