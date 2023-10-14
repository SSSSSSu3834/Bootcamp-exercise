import { useState } from "react";

function CounterStatePage() {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  // const onClickCountDown = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>+</button>
      {/* <button onClick={onClickCountDown}>-</button> */}
    </div>
  );
}

export default CounterStatePage;
