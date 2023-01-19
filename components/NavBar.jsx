import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <style jsx>{`
        nav {
          background-color: tomato;
        }

        a {
          text-decoration: none;
        }

        .active {
          color: tomato;
        }
      `}</style>

      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/login " legacyBehavior>
        <a>Login</a>
      </Link>

      {/* 모듈 css를 사용하지 않고 아래와 같이 styled jsx를 사용할 수도 있습니다.
      아래와 같이 사용하면 className이 좀 더 기이하게 바뀌게 되고 styles를 위한 import를 해줄 필요도없습니다
      또한 모든 styled jsx는 각 파일마다 독립적이며 NavBar에서 쓴 styled jsx는 다른 파일에 영향을 미치지 않습니다.
      */}
    </nav>
  );
}
