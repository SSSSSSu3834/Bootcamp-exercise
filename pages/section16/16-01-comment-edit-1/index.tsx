import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";
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

export default function StaticRoutingMovedPage(): JSX.Element {
  // 초기에는 어떤 값도 바뀌지 않게 하기 위해서 초기값을 -1로 설정했다.
  const [myIndex, setMyIndex] = useState(-1);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );
  console.log(data?.fetchBoards);
  // data.fetchBoards가 배열인 상태

  // 수정하기 원하는 댓글의 index를 찾아서 text창으로 바꿔주기
  // 댓글의 index를 state에 저장해놓고 쓰면 된다.
  // 버튼을 눌렀을 때 state값만 바꿔주면 된다.
  const onClickEdit = (e: MouseEvent<HTMLButtonElement>): void => {
    setMyIndex(Number(e.currentTarget.id));
  };

  return (
    <div>
      {/* fetchBoards의 타입을 정해주면 el의 타입을 정해줄 필요 없음 */}
      {data?.fetchBoards.map((el, index) =>
        index !== myIndex ? (
          <>
            <div key={el._id}>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <span style={{ margin: "10px" }}>{el.writer}</span>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          </>
        ) : (
          <>
            <input type="text" key={el._id} />
          </>
        ),
      )}
    </div>
  );
}
