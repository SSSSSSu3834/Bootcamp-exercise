import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [myfunc] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  //등록하기
  const onClickSubmit = async () => {
    const result = await myfunc({
      variables: {
        writer: name,
        title: detail,
        contents: price,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.myfunc.number}`);
  };

  //수정하기
  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: name,
        title: detail,
        contents: price,
      },
    });
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
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
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
    />
  );
}
