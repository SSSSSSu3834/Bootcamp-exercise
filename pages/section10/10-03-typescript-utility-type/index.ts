interface Iprofile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//1.partial 타입: (모두 ? 붙은 타입으로 만들고 싶을 때)
type aaa = Partial<Iprofile>;

//2. Required 타입: 모두 필수적으로 들어와야하는 타입으로 만들고 싶을 때
type bbb = Required<Iprofile>;

//3. Pick 타입: 원하는 값만 골라서 타입을 만들고 싶을 때
type ccc = Pick<Iprofile, "name" | "age">;

// 4. Omit 타입: 제외하고 싶은 타입이 있을 때
type ddd = Omit<Iprofile, "school">;

//5. Record 타입: interfacae를 value로 가지는 객체를 만들고 싶을 때
type eee = "철수" | "영희" | "훈이"; //union 타입
let child1: eee = "영희"; //"철수" | "영희" | "훈이" 만 됨
let child2: string = "apfhd"; //문자열은 모두 가능

type fff = Record<eee, Iprofile>; //record 타입

//6. 객체의 key값만 뽑아서 union 타입으로 만드는 방법
type ggg = keyof Iprofile; //"name" | "age" | "school"| "hoddy"
let myPofile: ggg = "name";

//7. type 과 interface의 차이 => 선언 병함
interface Iprofile {
  candy: number; //선언 병합으로 추가됨
}

//type은 선언 병합이 불가능!!
