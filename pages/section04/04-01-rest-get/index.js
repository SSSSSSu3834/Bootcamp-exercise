import axios from "axios";

export default function RestGetPage() {
  //동기
  // async function onClickAsync() {
  //   const result = await axios.get("http://koreanjson.com/posts/1");
  //   console.log(result); //api정보
  // } => 함수 중복선언 문제

  const onClickAsync = async () => {
    const result = await axios.get("http://koreanjson.com/posts/1");
    console.log(result); //api정보
  };

  //비동기
  function onClickSync() {
    const result = axios.get("http://koreanjson.com/posts/1");
    console.log(result); //Promise
  }

  return (
    <div>
      <button onClick={onClickSync}>Rest-API(비동기) 요청하기</button>
      <button onClick={onClickAsync}>Rest-API(동기) 요청하기</button>
    </div>
  );
}
