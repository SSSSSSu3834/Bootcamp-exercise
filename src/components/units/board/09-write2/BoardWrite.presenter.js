import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자:{" "}
      <RedInput
        type="text"
        onChange={props.onChangeName}
        defaultValue={props.data?.fetchBoard.writer}
      />
      제목:{" "}
      <RedInputt
        type="text"
        onChange={props.onChangeDetail}
        defaultValue={props.data?.fetchBoard.title}
      />
      내용:{" "}
      <RedInput
        type="int"
        onChange={props.onChangePrice}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <BlueBtn
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </BlueBtn>
    </div>
  );
}
