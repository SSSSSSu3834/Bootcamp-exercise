// 모든 페이지에 적용되는 공통설정을 하는 곳
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps): JSX.Element {
  // graphql 세팅

  return (
    <div>
      {/* recoilRoot로 감싸진 곳은 전부 리코일의 값을 전달받을 수 있ㄷㅏ. */}
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}
