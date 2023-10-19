import { useEffect } from "react";
import { IsEditState } from "../../../src/commons/stores";
import BoardWrite from "../../../src/components/units/22-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";

export default function GlobalStateWithRecoil(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(IsEditState);

  useEffect(() => {
    setIsEdit(false);
  }, []);
  return (
    <>
      <BoardWrite />
    </>
  );
}
