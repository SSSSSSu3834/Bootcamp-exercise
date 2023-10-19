import { IsEditState } from "../../../commons/stores";
import { useRecoilState } from "recoil";

export default function BoardWriteUI(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(IsEditState);

  return <>{isEdit ? "수정" : "등록"}</>;
}
