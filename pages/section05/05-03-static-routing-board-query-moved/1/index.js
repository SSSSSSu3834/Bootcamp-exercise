import { useQuery, gql } from "@apollo/client";

export default function StaticRoutingMovedPage() {
  const FETCH_BOARD = gql`
    query {
      fetchBoard(number: 1) {
        number
        writer
        title
        contents
      }
    }
  `;

  const { data } = useQuery(FETCH_BOARD);
  console.log(data);

  return (
    <div>
      <div>1번 게시글로 이동되었습니다.</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
      {/* 데이터가 있으면 출력하고 없으면 하지말라는 뜻 */}
    </div>
  );
}
