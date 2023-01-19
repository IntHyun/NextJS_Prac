import React from "react";
import Head from "next/head";

export default function Seo({ title }) {
  return (
    <div>
      <Head>
        <title>{title} | Movies</title>
      </Head>
    </div>
  );
}
