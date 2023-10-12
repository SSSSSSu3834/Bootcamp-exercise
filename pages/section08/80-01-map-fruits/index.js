const FRUITS = [
  { number: 1, title: "레드향1" },
  { number: 2, title: "레드향2" },
  { number: 3, title: "레드향3" },
  { number: 4, title: "레드향4" },
  { number: 5, title: "레드향5" },
  { number: 6, title: "레드향6" },
  { number: 7, title: "레드향7" },
  { number: 8, title: "레드향8" },
  { number: 9, title: "레드향9" },
  { number: 10, title: "레드향10" },
];

// 배열 map으로 원하는 모양대로 바꿀 때 한개만 만든다고 생각하면 편함.
//나머지는 자동으로 똑같이 바뀌니까

export default function MapFruitsPage() {
  //1. 기본 예제

  const aaa = [
    <div>1 레드향</div>,
    <div>2. 샤인머스캣</div>,
    <div>1 딸기</div>,
  ];

  // 2. 실무 백앤드 데이터 예제
  const fruit = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  return (
    <div>
      <div>{aaa}</div>
      ==============================
      <div>{fruit}</div>
      ==============================
      <div>
        {/* 실무에서는 변수에 담아서 보여주지 않고 바로 화면에 map써서 보여준다. */}
        {FRUITS.map((el) => (
          <div>
            {el.number} {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
