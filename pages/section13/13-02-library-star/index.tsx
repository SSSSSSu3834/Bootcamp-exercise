import React, { useState } from "react";
import { Rate } from "antd";

const App: React.FC = () => {
  const [value, setValue] = useState(3);

  // 작동원리
  // ===1단계 방식===
  //   const onChangeStar = (value: number): void => {
  //     setValue(value);
  //   };

  // ===2단계 방식===
  //  const onChangeStar = (value: number)=> setValue(value);  // 생략 가능

  return (
    // <Rate onChange={onChangeStar} value={value} />        // 1단계 방식
    // <Rate onChange={onChangeStar} value={value} />        // 2단계 방식
    // <Rate onChange={(value)=> setValue(value)} value={value} />;    // 3단계 방식
    <Rate onChange={setValue} value={value} /> // 4단계 방식
    // 들어오는 인자값이 그대로 함수에서 쓰이면 그 두개를 생략할 수 있다.
  );
};

export default App;
