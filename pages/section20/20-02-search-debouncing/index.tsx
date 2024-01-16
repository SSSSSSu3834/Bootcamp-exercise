import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import type { ChangeEvent, MouseEvent } from "react";
import { Fragment, useState } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  // const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    // 검색에서 refetch할 때, search 검색어가 refetch에 검색되어 있는
    // 상태이므로 추가로 search포함하지 않아도 된다.
    void refetch({
      // html에서 들어온 요소는 모두 string 이니까 Number로 바꿔줘야한다.
      page: Number(e.currentTarget.id),
    });
  };

  // setTimeout 처럼 작성(1000 = 1초)
  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 500);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(e.currentTarget.value);
  };

  // const onClickSearch = (): void => {
  //   void refetch({
  //     search,
  //     page: 1,
  //     // 만약에 10페이지에서 검색했다면 검색 결과는 1페이지부터 보여줘야하니까
  //   });
  // };

  return (
    <div>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {/* fetchBoards의 타입을 정해주면 el의 타입을 정해줄 필요 없음 */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
        // 각각 요소마다 이벤트가 들어갈 수 있으므로 inline요소인 span태그로 감싸준다.
      ))}
      {/* 페이지네이션 */}
      {new Array(10).fill(1).map((_, index) => (
        <Fragment key={index + startPage}>
          <span id={String(index + startPage)} onClick={onClickPage}>
            {index + startPage}
          </span>
        </Fragment>
      ))}
    </div>
  );
}
