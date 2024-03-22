import React from "react";
import HtmlIcon from "../assets/icons/html-icon.png";
import CssIcon from "../assets/icons/css-icon.png";
import JsIcon from "../assets/icons/javascript-programming-language-icon.png";
import ReactIcon from "../assets/icons/react-js-icon.png";
import TailwindIcon from "../assets/icons/tailwind-css-icon.png";
import NodeIcon from "../assets/icons/node-js-icon.png";
import MongoDbIcon from "../assets/icons/mongodb-icon.png";
import IconWrapper from "./IconWrapper";
import NextJsIcon from "../assets/icons/nextjs-13.svg";
import TypescriptIcon from "../assets/icons/Typescript-02.svg";
import PostgresqlIcon from "../assets/icons/postgresql.png"

function About() {
  return (
    <div className="px-5 md:px-2 lg:px-0 text-center md:text-left max-w-4xl mx-auto">
      <p>
        I'm a Full Stack Developer. I use React JS in the frontend and NodeJs in
        the backend. For the database, I use mongoDB, MySql, PostgreSQL.I am a quick learner, I can
        learn other tech stack too, if required. I have done my BCA from Cotton
        University, Guwahati in 2022.
      </p>
      <div className="techStack flex flex-col items-center gap-5 mt-8 md:mt-16 md:flex-row md:gap-12">
        <p className="font-semibold underline underline-offset-8">Tech Stack</p>
        <div className="icons flex items-center gap-3 md:gap-5 flex-wrap justify-center">
          <IconWrapper>
            <img className="w-7 h-auto" src={HtmlIcon} alt="htmlIcon" />
          </IconWrapper>
          <IconWrapper>
            <img className="w-7 h-auto" src={CssIcon} alt="cssIcon" />
          </IconWrapper>
          <IconWrapper>
            <img className="w-7 h-auto" src={JsIcon} alt="jsIcon" />
          </IconWrapper>
          <IconWrapper>
            <img className="w-8 h-auto" src={ReactIcon} alt="reactIcon" />
          </IconWrapper>
          <IconWrapper>
            <img className="w-8 h-auto" src={NextJsIcon} alt="nextjsIcon" />
          </IconWrapper>
          <IconWrapper>
            <img className="w-8 h-auto" src={TypescriptIcon} alt="typescriptIcon" />
          </IconWrapper>
          <IconWrapper>
            <img className="w-8 h-auto" src={TailwindIcon} alt="TailwindCssIcon"
            />
          </IconWrapper>
          <IconWrapper>
            <img className="w-8 h-auto" src={NodeIcon} alt="nodeIcon" />
          </IconWrapper>
          <IconWrapper>
            <img className="w-8 h-auto" src={PostgresqlIcon} alt="postgresqlIcon" />
          </IconWrapper>
          <IconWrapper>
            <img
              className="w-[1.1rem] h-auto"
              src={MongoDbIcon}
              alt="mongoDbIcon"
            />
          </IconWrapper>
        </div>
      </div>
    </div>
  );
}

export default About;
