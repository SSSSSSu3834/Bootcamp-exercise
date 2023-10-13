import { InfoCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(InfoCircleOutlined)`
  color: red;
  font-size: 20px; //아이콘의 크키는 대부분 font-size로 조절한다.
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (e) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div id="삭제할 게시글 id" onClick={onClickDelete}>
      <MyIcon />
    </div>
  );
}
