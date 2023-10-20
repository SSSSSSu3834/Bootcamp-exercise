import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSetting): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  //   console.log("나는 지금 브라우저다");
  //   alert("반가워요!");

  //   const result = localStorage.getItem("accessToken");
  //   setAccessToken(result ?? "");
  // }else {
  //   console.log("지금은 프론트엔드 서버! (yarn dev로 실행시킨 프로그램 내부!)")
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined") {
  //   console.log("나는 지금 브라우저다");
  // } else {
  //   console.log("지금은 프론트엔드 서버!");
  // }

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);

  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백앤트 데이터 임시로 저장하기
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
