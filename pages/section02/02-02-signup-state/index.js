import { useState } from "react";

export default function SingupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  function onClickSignup() {
    //1. 이메일 검증하기
    if (email.includes("@")) {
      //2. 백앤드에 전송 (이건 나중에)
      alert("회원가입을 축하합니다!");
      setErrMessage("");
    } else {
      setErrMessage("이메일이 올바르지 않습니다.");
      setEmail("");

      return;
    }
  }

  return (
    <div>
      이메일:{" "}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* 이메일 오류 메시지 보여주기 */}
      <div>{errMessage}</div>
      비밀번호:{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
