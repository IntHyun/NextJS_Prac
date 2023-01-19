import React from "react";
import Seo from "@/components/Seo";

// pages 안의 파일이 곳 url이되며 이는 next.js가 처리해줍니다.
// 여기서 중요한 점은 파일의 이름이 곧 url이 되는 것이며 component의 이름은 중요하지 않습니다.
// 또한 함수가 export default로 이루어져야 합니다.
// index가 우리의 / 즉, 홈이 됩니다.

// Next.js의 가장 큰 장점은 무엇일까요? 바로 서버사이드 렌더링을 한다는 점입니다.
// cra로 만든 리액트 앱의 경우 느린 환경에서 웹을 열었을때 html소스코드 부분이 비어있기 때문에 유저는 흰화면부터 보게될것입니다 그러나
// Next.js를 이용해 만든 앱이라면 html의 소스코드가 실제로 우리가 입력한 코드로 들어가있기 때문에 유저는 자바스크립트를 불러오기 전에도
// html의 코드를 볼 수 있으므로 사용자 측면에서 바라보았을 때 미리 렌더링이 된다는 장점이 있습니다.
// 즉, 그 말은 SEO에 굉장한 도움이 된다는 점이다 왜냐면 미리 html이 있기때문이고 그 말은 유저가 코드를 다운받아 react를 실행시키길 기다리지 않아도 되기 때문이다.
// 중요한 것은 모든것이 로딩 된 후에 react.js가 로딩된다는 점이다.
export default function index() {
  return (
    <div>
      <Seo title="HOME" />
      <h1>this is Home</h1>
    </div>
  );
}
