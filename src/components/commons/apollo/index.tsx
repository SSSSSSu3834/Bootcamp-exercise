import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSetting {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSetting): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백앤트 데이터 임시로 저장하기
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}