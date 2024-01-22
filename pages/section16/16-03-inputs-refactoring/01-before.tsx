import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

export default function GraphqlMutationPage() {
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const CREATE_PRODUCT = gql`
    mutation createProduct(
      $seller: String
      $createProductInput: CreateProductInput!
    ) {
      createProduct(seller: $seller, createProductInput: $createProductInput) {
        _id
      }
    }
  `;

  const [myfunc] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await myfunc({
      variables: {
        seller: "훈이",
        createProductInput: {
          name: name,
          detail: detail,
          price: parseInt(price),
        },
      },
    });
    console.log(result);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      작성자: <input type="text" value={name} onChange={onChangeName} />
      상세 설명: <input type="text" value={detail} onChange={onChangeDetail} />
      가격: <input type="int" value={price} onChange={onChangePrice} />
      <button onClick={onClickSubmit}>graphql-api 요청하기</button>
    </div>
  );
}
