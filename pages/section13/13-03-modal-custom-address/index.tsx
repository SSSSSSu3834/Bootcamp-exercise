import { JsxElement } from "typescript";
import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Address } from "cluster";

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

  const handleComplete = (data: Address): void => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={showModal}>모달창 열기</button>

      {/* 모달 종료 방식 1 - 모달 숨기는 방법(ex, 이력서 등) */}
      <Modal open={isOpen} onOk={handleOk} onCancel={handleCancle}>
        주소 입력: <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>

      {/* 모달 종료 방식 2 - 모달 삭제하는 방법 (ex, 비밀번호 등) */}

      {isOpen ?? (
        <Modal open={isOpen} onOk={handleOk} onCancel={handleCancle}>
          주소 입력: <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </div>
  );
}

// 모달 위에 있는 버튼인 onOk, onCancle을 누르면 open의 state를 바꿔주면된다.
