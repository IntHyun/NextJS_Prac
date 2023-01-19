// NextJS는 모든 파일이 렌더링 되기전 이 app.js부터 확인한 뒤 나머지 pages에 들어있는 파일들을 렌더링합니다.
import Layout from "@/components/Layout";
import React from "react";

export default function App({ Component, pageProps }) {
  // 모든 컴포넌트들은 이 파일을 지나친 뒤에 렌더링이 됩니다 즉, about페이지로 이동하게 되면 그 about페이지에 있는 함수가 Component로 전달되고
  // 그 about페이지의 함수가 렌더링 되는것입니다. 그렇기 때문에 _app파일에서 전역적으로 설정할 컴포넌트, 스타일등을 설정하여 모든 파일에 동일하게 적용되는
  // 스타일 또는 컴포넌트 등을 적용할 수 있습니다.
  return (
    <Layout>
      <Component {...pageProps} />
      <span>Hello</span>
    </Layout>
  );
}
