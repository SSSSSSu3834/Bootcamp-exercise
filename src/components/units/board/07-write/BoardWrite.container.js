import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();
  const [isActive, setIsActive] = useState(false);

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
    if (e.target.value && detail && price) {
      setIsActive(!isActive);
    }
  };
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
    if (name && e.target.value && price) {
      setIsActive(!isActive);
    }
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
    if (name && detail && e.target.value) {
      setIsActive(!isActive);
    }
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      isActive={isActive}
    />
  );
}
