import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { set } from "lodash";
import { checkValidationFile } from "../../../src/commons/library/validationFile";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
      # url을 리스폰스로 받음
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  // 태그를 저장할 ref를 만들어준다.
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  // 파일이 실행됐을 때 실행할 함수
  const onChangeFile = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = e.target.files?.[0]; //배열로 들어오는 이유: multiple값이 설정되어 있을 수 있으니
    // 옵셔널체인으로 배열에 값이 없을 경우를 고려해준다.

    const isValid = checkValidationFile(file);
    // false를 반환할 때는 함수를 return해준다.
    if (!isValid) return;

    // 이미지파일을 백엔드에 보내주고 주소를 받아올 때까지 기다려야한다.
    // 받아온 주소를 result 변수에 담아준다.
    const result = await uploadFile({
      variables: {
        file,
      },
    });

    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      {/* 이걸 누르면 이미지 선택이 되도록 만듦 */}
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>

      {/* type = file은 이미지파일을 넣을 수 있는 곳으로 연결된다. */}
      {/* 여러개의 파일을 선택하고 싶을 땐 multiple={true} 값을 주면 된다. */}
      <input
        type="file"
        style={{ display: "none" }}
        onChange={onChangeFile}
        multiple={true}
        ref={fileRef}
        accept="image/jpeg, image/png"
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
