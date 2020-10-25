import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default function Portfolio() {
  return (
    <Layout>
      <Helmet>
        <title>Tim Bodyka Heng | Portfolio</title>
      </Helmet>
      <div className="grid grid-cols-1">
        <h1>This is the projects page.</h1>
      </div>
    </Layout>
  );
}
