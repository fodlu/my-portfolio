import './goto.css';
import { ArrowBigRightDash } from 'lucide-react';

export default function Goto({ children, onClick }) {
  return (
    <div className="goto" onClick={onClick}>
      <div className="direction">{children}</div>
      <span>
        <ArrowBigRightDash />
      </span>
    </div>
  );
}
