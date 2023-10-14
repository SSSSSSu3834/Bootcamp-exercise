import { JsxElement } from "typescript";
import { Modal } from "antd";
import { useState } from "react";

export default function ModalAlertPage(): JsxElement {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancle = (): void => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={showModal}>모달창 열기</button>
      <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancle}
      >
        비밀번호 입려: <input type="password" />
      </Modal>
    </div>
  );
}

// 모달 위에 있는 버튼인 onOk, onCancle을 누르면 open의 state를 바꿔주면된다.
