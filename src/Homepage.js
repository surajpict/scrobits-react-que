 //useState hook is being used to update the currstate based on the button clicked

import React, {useState} from 'react';
import './Homepage.css';  

const Homepage = () => {
  //useState Hook
   const [currstate, setState] = useState(1);

  //function to be called onClick event
  //setState updates the currstate

  const clicked = (index) => {
    setState(index);
  };

  return (
    //onClick event is invoked when user clicks the button 
    //respective index is passed as arrgument to clicked function
    <div>
        <button className={currstate === 1 ? "height" : null}
          onClick={() => clicked(1)}>1</button> 
        <button className={currstate === 2 ? "height" : null}
          onClick={() => clicked(2)}>2</button>
        <button className={currstate === 3 ? "height" : null}
          onClick={() => clicked(3)}>3</button>
        <button className={currstate === 4 ? "height" : null}
          onClick={() => clicked(4)}>4</button>
        <button className={currstate === 5 ? "height" : null}
          onClick={() => clicked(5)}>5</button>
        <button className={currstate === 6 ? "height" : null}
          onClick={() => clicked(6)}>6</button>
        <button className={currstate === 7 ? "height" : null}
          onClick={() => clicked(7)}>7</button>
        <button className={currstate === 8 ? "height" : null}
          onClick={() => clicked(8)}>8</button>
    </div>
  )
}

export default Homepage