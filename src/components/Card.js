import { useState } from 'react';

const Card = ({result, children}) => {
    const [display, setDisplay] = useState(true);

  return (
    <div className={display ? "" : "hidden"}>
    <div className={`box ${result}`}>
        {children}
    </div>
    <button 
    onClick={() => setDisplay(!display)} 
    className="toggle">
        Close
    </button>
    </div>
  )
}

export default Card