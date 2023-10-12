import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자: <RedInput type="text" onChange={props.onChangeName} />
      상세 설명: <RedInputt type="text" onChange={props.onChangeDetail} />
      가격: <RedInput type="int" onChange={props.onChangePrice} />
      <BlueBtn onClick={props.onClickSubmit} isActive={props.isActive}>
        graphql-api 요청하기
      </BlueBtn>
    </div>
  );
}
