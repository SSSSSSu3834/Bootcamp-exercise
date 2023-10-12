import { useQuery, gql } from "@apollo/client";

export default function StaticRoutingMovedPage() {
  const FETCH_BOARDS = gql`
    query {
      fetchBoards {
        number
        writer
        title
        contents
      }
    }
  `;

  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  //data.fetchBoards가 배열인 상태

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
        // 각각 요소마다 이벤트가 들어갈 수 있으므로 inline요소인 span태그로 감싸준다.
      ))}
    </div>
  );
}
