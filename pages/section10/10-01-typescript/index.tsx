import { stringify } from "querystring";

export default function TypescriptPage() {
  //타입 추론
  let aaa = "안녕하세요";
  //aaa = 3;

  //타입 명시
  let bbb: string = "반갑습니다";
  //bbb = 10; //오류

  //타입 명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  //숫자 타입
  let ddd: number = 10;
  // ddd = "철수";

  //boolean 타입
  let eee: boolean = true;
  eee = false;
  //eee="false"
  //이건 false가 아니라 truthy 값이므로 true로 인식한다.
  //이런 경우를 막기위해서 ts가 필요한 것이다.

  //배열 타입
  let fff: number[] = [1, 2, 3]; //number만 들어올 수 있음
  let ggg: string[] = ["sdf", "sdd", "aaa"]; //string만 들어올 수 있음
  //만약 여러 타입을 배열에 넣고 싶다면?
  let hhh: (string | number)[] = ["철수", 10]; //타입을 추론해서 어떤 타입을 사용하는지 알아볼 수 있다.

  //객체 타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "초등학교",
    // hobby: "축구",
  };

  profile.name = "훈이";
  profile.age = "8살"; //오류!
  profile.hobby = "수영"; //새로운 값 추가 가능

  //함수 타입
  //가격을 더하는 함수
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }

  const result = add(1000, 2000, "원");

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };

  //any 타입
  let qqq: any = "철수";
  qqq = 123;
  qqq = true;
}
