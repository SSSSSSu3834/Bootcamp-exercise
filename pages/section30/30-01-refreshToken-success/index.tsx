import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage(): JSX.Element {
  // 데이터 가져와서 화면에 보여주는 방법
  // 1. 페이지 접속하면 자동으로 data에 받아지고(data는 글로벌스테이트에 저장), 리렌더 됨.
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);
  // 2. 버튼 클릭시 data에 받아지고(data는 글로벌스테이트에 저장), 리렌더링
  // const [나의 함수,{data}]= useLazyQuery(FETCH_USER_LOGED_IN);
  // 3. axios처럼 사용하는 방법
  // const client = useApolloClient();
  // client.query() // axios.get()과 똑같은 방식
  // return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;

  const client = useApolloClient();

  const onClickBtn = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGED_IN,
    });

    console.log(result);
  };

  return (
    <>
      <button onClick={onClickBtn}>클릭하세요</button>
    </>
  );
}
