import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자:{" "}
      <RedInput type="text" value={name} onChange={props.onChangeName} />
      상세 설명:{" "}
      <RedInputt type="text" value={detail} onChange={props.onChangeDetail} />
      가격: <RedInput type="int" value={price} onChange={props.onChangePrice} />
      <BlueBtn onClick={props.onClickSubmit}>graphql-api 요청하기</BlueBtn>
    </div>
  );
}
