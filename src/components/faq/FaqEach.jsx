import { useState } from 'react';

export default function FaqEach({ item }) {
  const { question, answer } = item;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq">
      <div className="question" onClick={() => setIsOpen(!isOpen)}>
        <p>{question}</p>
        <p>{!isOpen ? '+' : '-'}</p>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
}
