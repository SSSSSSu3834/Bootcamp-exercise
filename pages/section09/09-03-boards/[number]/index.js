import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

export default function StaticRoutingMovedPage() {
  const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
      fetchBoard(number: $number) {
        number
        writer
        title
        contents
      }
    }
  `;

  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
      //라우팅 된 페이지의 번호와 쿼리 해오는 번호를 연결시킴
    },
  });
  console.log(data);

  const onClickMove = () => {
    router.push(`/section09/09-03-boards/${router.query.number}/edit/`);
  };
  return (
    <div>
      <div>{router.query.number}번 게시글로 이동되었습니다.</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
      <button onClick={onClickMove}>수정하러가기</button>
      {/* 데이터가 있으면 출력하고 없으면 하지말라는 뜻 */}
      {/* 없는 데이터가 있을 수 있기때문에 fetchBoard 뒤에도 ? 붙여줌 */}
    </div>
  );
}
