import React from "react";
// 아래와 같이 Link를 사용하도록 합니다.
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  // 라우터는 location에 관한 정보를 얻을 수 있습니다.
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/" legacyBehavior>
        {/* 여러개의 스타일을 일괄적용하고 싶다면 아래와 같이 사욯애주도록 합니다. */}
        <a className={`${styles.always} ${router.pathname === "/" ? styles.active : styles.unActive}`}>Home</a>
      </Link>

      <Link href="/" legacyBehavior>
        {/* React에서 처럼 Link태그를 단독으로 쓰지않고 앵커태그안에 감싸주는 이유가 무엇일까요? */}
        {/* NextJS에서 Link태그는 단지 href속성만을 쓸 수 있으므로 a태그를 안에 작성해주어야 합니다 
        그리고 그 a태그에 style이나 className을 부여하도록 합니다.
        */}
        {/* 13버전 이후부터는 Link를 a태그로 감싸주지 않아도 됩니다. 감싸주려면 위의 코드처럼 legacyBehavior 사용해주거나 아니면 a태그를 없애고 
        기존에 사용하던 것 처럼 Link태그에 style이나 className을 붙여주도록 합니다.
        */}
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>

      {/* NextJS에서는 React와 마찬가지로 아래와 같이 a태그를 쓰지않습니다. 그 이유는 페이지 전체가 새로고침되어
      페이지의 속도가 느려지기 때문인데 NextJS에서도 React에서와 마찬가지로 사용하는 Link같은 컴포넌트가 존재합니다.
      */}
      <Link style={{ color: router.pathname === "/login" ? "red" : "blue" }} className="Hello" href="/login">
        login
      </Link>
    </nav>
  );
}
