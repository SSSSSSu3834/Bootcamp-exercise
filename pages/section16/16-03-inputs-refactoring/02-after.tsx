import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

export default function GraphqlMutationPage() {
  // useState로 받고 있는 input들을 하나로 모아보자
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const CREATE_PRODUCT = gql`
    mutation createProduct($createProductInput: CreateProductInput!) {
      createProduct(createProductInput: $createProductInput) {
        _id
      }
    }
  `;

  const [myfunc] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await myfunc({
      variables: {
        createProductInput: {
          ...inputs,
        },
      },
    });
    console.log(result);
  };

  // 리팩토링한 inputs
  const onChangeInputs = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      상세 설명: <input type="text" id="title" onChange={onChangeInputs} />
      가격: <input type="int" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>graphql-api 요청하기</button>
    </div>
  );
}
