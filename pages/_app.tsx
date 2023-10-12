//모든 페이지에 적용되는 공통설정을 하는 곳

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

export default function App({ Component }: AppProps) {
  //graphql 세팅
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에다가 백앤트 데이터 임시로 저장하기
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </div>
  );
}
