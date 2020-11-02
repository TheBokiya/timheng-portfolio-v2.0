import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTypewriter } from "@fortawesome/pro-light-svg-icons";
import Layout from "../components/layout";
import Paper from "../components/paper";
import { Helmet } from "react-helmet";

const papers = [
  {
    title:
      "Sleep-Wake-Behaviour App: Towards developing a database for informing e-coaching solutions for neurodevelopmental disorders in children",
    authors:
      "Tim Bodyka Heng, Ankit Gupta, Chris Shaw, Caylee Raber, Markus Schilling, Nina Chen, Danni Peng, Banban Zhao, Osman Ipsiroglu, Mai Berger, and Nadia Beyzaei",
    year: 2018,
    link: "https://dl.acm.org/doi/abs/10.1145/3240925.3240976",
  },
  {
    title:
      "FitViz-Ad: A Non-Intrusive Reminder to Encourage Non-Sedentary Behaviour",
    authors: "Tim Bodyka Heng, Ankit Gupta, Chris Shaw",
    year: 2018,
    link:
      "https://www.ingentaconnect.com/content/ist/ei/2018/00002018/00000001/art00004",
  },
  {
    title:
      "FitViz-Ad: A non-intrusive reminder to support and encourage rheumatoid arthritis patients with physical activity",
    authors: "Tim Bodyka Heng",
    year: 2018,
    link: "http://summit.sfu.ca/item/17915",
  },
  {
    title:
      "Towards developing an e-coach to support arthritis patients in maintaining a physically active lifestyle",
    authors: "Ankit Gupta, Tim Bodyka Heng, Chris Shaw, Linda Li, Lynne Feehan",
    year: 2018,
    link: "https://dl.acm.org/doi/abs/10.1145/3240925.3240954",
  },
  {
    title:
      "Designing pervasive technology for physical activity self-management in arthritis patients",
    authors: "Ankit Gupta, Tim Bodyka Heng, Chris Shaw, Linda Li, Lynne Feehan",
    year: 2018,
    link: "https://dl.acm.org/doi/abs/10.1145/3240925.3240956",
  },
];

export default function Publications() {
  return (
    <Layout>
      <Helmet>
        <title>Publications</title>
      </Helmet>
      <div className="mt-5">
        <h1 className="text-4xl font-black">
          <FontAwesomeIcon icon={faTypewriter} className="mr-5 text-red" />
          What I&apos;ve Written
        </h1>
        <p className="mt-10">
          Having spent many years in academia, I&apos;ve been involved in
          multiple research projects and have authored/co-authored multiple
          publications as well. You can check out all of my publications below.
        </p>
        <hr className="my-8" />
        <div>
          {papers.map((item, index) => {
            return (
              <Paper
                key={index}
                title={item.title}
                authors={item.authors}
                year={item.year}
                link={item.link}
              ></Paper>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
