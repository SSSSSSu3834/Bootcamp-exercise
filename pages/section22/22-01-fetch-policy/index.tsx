import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import FetchPolicyExample from "../../../src/components/units/22-01-fetch-policy";
import { useState } from "react";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards() {
    fetchBoards() {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // 1. 새로운 컴포넌트 등장시에도 글로벌스테이트 값이 유지되는지?(백엔드 요청x)
  const onClickIsOpen = (): void => {
    setIsOpen(true);
  };

  // 2. 새로운 페이지 이동시에도 글로벌스테이트 값이 유지되는지(백엔드 요청x)
  const onClickMove = (): void => {
    void router.push(`/section22/22-01-fetch-policy-moved`);
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>
        1. 버튼 클릭시 새로운 컴포넌트 나타남
      </button>
      {isOpen && <FetchPolicyExample />}
      ============================================
      <button onClick={onClickMove}>2. 버튼 클릭시 페이지가 이동됩니다.</button>
    </div>
  );
}
