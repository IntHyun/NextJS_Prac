import React from "react";
// 아래와 같이 Link를 사용하도록 합니다.
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  // 라우터는 location에 관한 정보를 얻을 수 있습니다.
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={styles.nav}>Home</a>
      </Link>

      <Link style={{ color: router.pathname === "/login" ? "red" : "blue" }} className="Hello" href="/login">
        login
      </Link>
    </nav>
  );
}
