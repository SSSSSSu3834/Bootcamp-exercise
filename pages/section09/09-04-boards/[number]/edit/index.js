import BoardWrite from "@/src/components/units/board/09-write/BoardWrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

//여기서 게시글 데이터를 가져와서 boardWrite 컴포넌트에 props로 뿌려준다
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

export default function GraphqlMutationPage(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
      //라우팅 된 페이지의 번호와 쿼리 해오는 번호를 연결시킴
    },
  });

  return (
    <div>
      <BoardWrite isEdit={true} data={data} />
    </div>
  );
}
