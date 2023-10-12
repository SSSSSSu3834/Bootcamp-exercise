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
    router.push(`/section09/09-04-boards/${result.data.myfunc.number}`);
  };

  //수정하기
  const onClickUpdate = async () => {
    //빈 객체 만들어서 추가하기
    const myVariables = {
      number: Number(router.query.number),
    };

    if (title) {
      myVariables.title = detail;
    }
    if (writer) {
      myVariables.writer = name;
    }
    if (contents) {
      myVariables.contents = price;
    }

    const result = await updateBoard({
      variables: myVariables,
    });
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
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
      data={props.data} //undefined 이거나(등록하기 페이지일때), data이거나!
    />
  );
}
