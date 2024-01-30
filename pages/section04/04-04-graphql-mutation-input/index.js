import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

export default function GraphqlMutationPage() {
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const CREATE_PRODUCT = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
      createBoard(writer: $writer, title: $title, contents: $contents) {
        _id
        number
        message
      }
    }
  `;

  const [myfunc] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await myfunc({
      variables: {
        writer: name,
        title,
        contents,
      },
    });
    console.log(result);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDetail = (e) => {
    setTitle(e.target.value);
  };
  const onChangePrice = (e) => {
    setContents(e.target.value);
  };

  return (
    <div>
      작성자: <input type="text" onChange={onChangeName} />
      상세 설명: <input type="text" onChange={onChangeDetail} />
      가격: <input type="text" onChange={onChangePrice} />
      <button onClick={onClickSubmit}>graphql-api 요청하기</button>
    </div>
  );
}
