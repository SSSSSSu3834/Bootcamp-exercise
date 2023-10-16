import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { Fragment, MouseEvent } from "react";

export default function StaticRoutingMovedPage(): JSX.Element {
  const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
      fetchBoards(page: $page) {
        _id
        writer
        title
        contents
      }
    }
  `;

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  // data.fetchBoards가 배열인 상태

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    // refet 함수 안에는 variables를 써줘야한다. 하지만 variables를 써줄 필요는 없음
    void refetch({
      // html에서 들어온 요소는 모두 string 이니까 Number로 바꿔줘야한다.
      page: Number(e.currentTarget.id),
    });
  };

  return (
    <div>
      {/* fetchBoards의 타입을 정해주면 el의 타입을 정해줄 필요 없음 */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
        // 각각 요소마다 이벤트가 들어갈 수 있으므로 inline요소인 span태그로 감싸준다.
      ))}

      {new Array(10).fill(1).map((el, index) => (
        <Fragment key={index + 1}>
          <span id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        </Fragment>
      ))}

      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <Fragment key={index + 1}>
          <span id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        </Fragment>
      ))}

      {/* <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage}>
        2
      </span>
      <span id="3" onClick={onClickPage}>
        3
      </span> */}
    </div>
  );
}
