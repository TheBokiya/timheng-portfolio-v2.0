import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const PageNotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className="grid place-content-center">
        <h1 className="text-6xl text-red text-center mb-5">404</h1>
        <h3 className="text-xl">
          Oops! This is not the page you're looking for.
        </h3>
      </div>
    </Layout>
  );
};

export default PageNotFound;