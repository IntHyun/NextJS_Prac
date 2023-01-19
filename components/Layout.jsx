import React from "react";
import NavBar from "./NavBar";
import Head from "next/head";

export default function Layout({ children }) {
  console.log(children);
  return (
    <div>
      <Head>
        <title>{children}</title>
      </Head>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
