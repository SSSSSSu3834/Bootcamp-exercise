import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import { Fragment, MouseEvent } from "react";
import { useState } from "react";

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

const FETCH_BOARD_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  // data.fetchBoards가 배열인 상태

  // 목록의 전체개수
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNT);

  // 마지막 페이지 구하기
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    // refetch 함수 안에는 variables를 써줘야한다. 하지만 variables를 써줄 필요는 없음
    void refetch({
      // html에서 들어온 요소는 모두 string 이니까 Number로 바꿔줘야한다.
      page: Number(e.currentTarget.id),
    });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
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

      {/* 페이지네이션 */}
      <span onClick={onClickPrevPage}>이전</span>
      {new Array(10).fill(1).map((_, index): void => {
        index + startPage <= lastPage ? (
          <Fragment key={index + startPage}>
            <span id={String(index + startPage)} onClick={onClickPage}>
              {index + startPage}
            </span>
          </Fragment>
        ) : (
          <span></span>
        );
      })}
      <span onClick={onClickNextPage}>다음</span>

      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <Fragment key={index + 1}>
          <span id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        </Fragment>
      ))} */}

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
