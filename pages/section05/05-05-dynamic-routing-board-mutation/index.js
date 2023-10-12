import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const graphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [myfunc] = useMutation(graphqlSetting);

  const onClickSubmit = async () => {
    try {
      const result = await myfunc({
        variables: {
          //variables 이게 $랑 똑같은 거임.
          writer: "짱구",
          title: "타이틀입니다",
          contents: "내용을 집어넣습니다",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <button onClick={onClickSubmit}>graphql-api 요청하기</button>
    </div>
  );
}
