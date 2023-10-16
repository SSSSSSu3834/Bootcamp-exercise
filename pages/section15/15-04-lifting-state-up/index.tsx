import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <>=========================</>
      <Child2 count={count} onClickCountUp={onClickCountUp} />
    </div>
  );
}

export default CounterStatePage;
