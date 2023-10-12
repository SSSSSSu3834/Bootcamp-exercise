import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");

  const [myfunc] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  //등록하기
  const onClickSubmit = async () => {
    const result = await myfunc({
      variables: {
        writer,
        title,
        contents,
      },
    });
    console.log(result);
    router.push(
      `/section09/10-02-typescript-boards/${result.data.myfunc.number}`
    );
  };

  //수정하기
  const onClickUpdate = async () => {
    //인터페이스 만들어서 객체타입 지정하기

    //빈 객체 만들어서 추가하기
    const myVariables: IMyVariables = {
      number: Number(router.query.number),
    };

    if (title) {
      myVariables.title = title;
    }
    if (writer) {
      myVariables.writer = writer;
    }
    if (contents) {
      myVariables.contents = contents;
    }

    const result = await updateBoard({
      variables: myVariables,
    });
    router.push(
      `/section09/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangeDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
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
