import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자: <RedInput type="text" onChange={props.onChangeName} />
      제목: <RedInputt type="text" onChange={props.onChangeDetail} />
      내용: <RedInput type="int" onChange={props.onChangePrice} />
      <BlueBtn
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </BlueBtn>
    </div>
  );
}
