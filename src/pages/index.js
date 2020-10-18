import React from "react";
import Layout from "../components/layout";
import LinkWithIcon from "../components/linkWithIcon";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const contacts = [
  {
    name: "thebokiya",
    icon: faInstagram,
    link: "https://www.instagram.com/thebokiya/",
  },
  {
    name: "timbheng",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/timbheng/",
  },
  {
    name: "hengbodyka",
    icon: faAt,
    link: "mailto:hengbodyka@gmail.com?Subject=Hello",
  },
];

export default function Home() {
  return (
    <Layout>
      <h1 className="text-6xl my-10">&gt; Hello! I&apos;m Tim.</h1>
      <div className="lg:w-3/4 text-2xl">
        <p className="text-3xl mb-5">Welcome to my personal portfolio.</p>
        <p>
          A UX/UI designer + Front-End developer and a coffee addict. I&apos;m
          very passionate about digital design and also a lowkey admirer of
          everyday design.
        </p>
        <p>
          Full-time Chelsea supporter, pop-culture junkie and master of memes.
        </p>
        <p>
          Get in touch with me if you have any interesting projects you have in
          mind.
        </p>
      </div>
      <div className="mt-10">
        {contacts.map((item, index) => {
          return (
            <LinkWithIcon
              key={item.name}
              icon={item.icon}
              name={item.name}
              link={item.link}
            ></LinkWithIcon>
          );
        })}
      </div>
    </Layout>
  );
}
