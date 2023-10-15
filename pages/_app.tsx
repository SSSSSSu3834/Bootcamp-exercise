// 모든 페이지에 적용되는 공통설정을 하는 곳
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/globalStyles";

export default function App({ Component }: AppProps): JSX.Element {
  // graphql 세팅

  return (
    <div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </div>
  );
}
