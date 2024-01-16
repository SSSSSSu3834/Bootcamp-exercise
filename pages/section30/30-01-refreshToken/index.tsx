import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../../src/commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String, $password: String) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  // recoil
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (e): void => {
    setEmail(e.currentTarget.value);
  };

  const onChangePassword = (e): void => {
    setPassword(e.currentTarget.value);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
      const result = await loginUserExample({
        variables: {
          email,
          password,
        },
      });

      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(accessToken);

      // 2. 받아온 accessToken 글로벌스테이트에 저장하기
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다!");
        return;
      }
      setAccessToken(accessToken);

      // 3. 로그인 성공페이지로 이동하기
      void router.push("/section30/30-01-refreshToken-success");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      이메일:
      <input type="text" onChange={onChangeEmail} />
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
