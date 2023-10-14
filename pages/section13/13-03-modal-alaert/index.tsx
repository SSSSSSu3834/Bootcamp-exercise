import { JsxElement } from "typescript";
import { Modal } from "antd";

export default function ModalAlertPage(): JsxElement {
  const onClinckSuccess = (): void => {
    Modal.success({
      content: "게시글 등록에 성공했습니다!",
    });
  };

  const onClickError = (): void => {
    Modal.error({
      title: "Error",
      content: "비밀번호가 틀렸습니다",
    });
  };

  return (
    <div>
      <button onClick={onClinckSuccess}>성공</button>
      <button onClick={onClickError}>실패</button>
    </div>
  );
}
