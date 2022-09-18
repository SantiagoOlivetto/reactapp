import { useState } from "react";

const Counter = ({ stock, initial }) => {
  const [counter, setCounter] = useState(Number(initial));  

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div className="m-5">
        <button
          disabled={counter === Number(initial)}
          onClick={minus}
          className="btn btn-primary rounded"
        >
          -
        </button>
        <strong className="m-2">{counter}</strong>
        <button
          disabled={counter === Number(stock)}
          onClick={plus}
          className="btn btn-primary rounded"
        >
          +
        </button>
      </div>
      <button disabled={counter < Number(initial)} className="btn btn-primary rounded m-4">
        Add to cart
      </button>
    </div>
  );
};

export default Counter;
