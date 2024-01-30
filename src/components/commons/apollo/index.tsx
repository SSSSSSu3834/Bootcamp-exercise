import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from 'apollo-upload-client';


const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSetting): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  
  //사진 업로드를 위한 기능추가
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
  })
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

  // 실패한 쿼리: operation,  재요청 함수: forward
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러 캐치
    // 2. refreshToken으로 accessToken 재발급 받기
    // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백앤트 데이터 임시로 저장하기
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
