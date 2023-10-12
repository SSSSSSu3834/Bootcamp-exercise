import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

export default function GraphqlMutationPage() {
  const graphqlSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
      createBoard(writer: $writer, title: $title, contents: $contents) {
        _id
      }
    }
  `;

  //const [myfunc] = useMutation<결과타입, 변수타입>(graphqlSetting);
  const [myfunc] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(graphqlSetting);

  const onClickSubmit = async () => {
    const result = await myfunc({
      variables: {
        //variables 이게 $랑 똑같은 거임.
        writer: "짱구",
        title: "아주 가벼워요",
        contents: "하하하",
      },
    });
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>graphql-api 요청하기</button>
    </div>
  );
}
