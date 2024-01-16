import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import CommentItem from "../../../src/components/units/16-comment-item";

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
  // 여러값을 받기 위해 초기값을 배열로 설정한다

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );
  console.log(data?.fetchBoards);
  // data.fetchBoards가 배열인 상태

  return (
    <div>
      {/* fetchBoards의 타입을 정해주면 el의 타입을 정해줄 필요 없음 */}
      {data?.fetchBoards.map((el) => <CommentItem key={el._id} el={el} />)}
    </div>
  );
}
