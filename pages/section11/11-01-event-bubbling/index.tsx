import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";

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

  const onClickAlert = (e: MouseEvent<HTMLDivElement>) => {
    alert(e.currentTarget.id + "님이 작성한 글입니다!");
  };

  const aaa = () => {
    alert("클릭 타이틀");
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div onClick={onClickAlert} id={el.writer}>
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
