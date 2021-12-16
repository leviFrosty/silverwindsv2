import Head from "next/head";
import React from "react";
import Layout, { siteTitlePrefix } from "../components/layout";
import PageTitle from "../components/PageTitle";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>{siteTitlePrefix} Portfolio</title>
      </Head>
      <PageTitle>Portfolio</PageTitle>
    </Layout>
  );
}
