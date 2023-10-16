function Child2(props: any): JSX.Element {
  return (
    <div>
      <div>자식1의 카운트:{props.count}</div>
      <button onClick={props.onClickCountUp}>+</button>
    </div>
  );
}

export default Child2;
