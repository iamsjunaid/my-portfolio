import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaAngellist } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { HiChevronRight, HiChevronDown } from 'react-icons/hi';
import html from '../assets/img/icons/html-5.png';
import css from '../assets/img/icons/css.png';
import js from '../assets/img/icons/js.png';
import react from '../assets/img/icons/react.png';
import redux from '../assets/img/icons/redux.png';
import ror from '../assets/img/icons/ror.png';
import postgres from '../assets/img/icons/postgres.png';
import mysql from '../assets/img/icons/mysql.png';
import next from '../assets/img/icons/next.png';
import git from '../assets/img/icons/git.png';
import github from '../assets/img/icons/github.png';
import vscode from '../assets/img/icons/vscode.png';
import ruby from '../assets/img/icons/ruby.png';
import tailwind from '../assets/img/icons/tailwind.png';
import bootstrap from '../assets/img/icons/bootstrap.png';
import responsive from '../assets/img/icons/responsive.png';
import tdd from '../assets/img/icons/tdd.png';
import rspec from '../assets/img/icons/rspec.png';

const About = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [languagesButtonClicked, setLanguagesButtonClicked] = useState(false);

  const [showFrameworks, setShowFrameworks] = useState(false);
  const [FramworksButtonClicked, setFramworksButtonClicked] = useState(false);

  const [showDatabases, setShowDatabases] = useState(false);
  const [databasesButtonClicked, setDatabasesButtonClicked] = useState(false);

  const [showTools, setShowTools] = useState(false);
  const [toolsButtonClicked, setToolsButtonClicked] = useState(false);

  const handleShowLanguages = () => {
    setShowLanguages(!showLanguages);
    setLanguagesButtonClicked(!languagesButtonClicked);
  };

  const handleShowFramworks = () => {
    setShowFrameworks(!showFrameworks);
    setFramworksButtonClicked(!FramworksButtonClicked);
  };

  const handleShowDatabases = () => {
    setShowDatabases(!showDatabases);
    setDatabasesButtonClicked(!databasesButtonClicked);
  };

  const handleShowTools = () => {
    setShowTools(!showTools);
    setToolsButtonClicked(!toolsButtonClicked);
  };

  return (
    <section
      id="about"
      className="bg-white flex flex-col sm:flex-row items-center justify-center p-8 sm:p-48 rounded-tr-[100px] h-auto gap-8"
    >
      <div className="gap-4 flex flex-col">
        <h1 className="text-primary font-bold text-40 leading-52">
          About Myself
        </h1>
        <p className="text-primary font-normal text-base leading-6">
          I&apos;m an experienced software developer with a degree in Computer
          Science Engineering.
          <br />
          Bringing ideas to life through code. So if you have an idea that needs
          to be designed and
          <br />
          coded, feel free to contact me.
        </p>
        <p className="text-tertiary font-medium text-base leading-6">
          LET&apos;S CONNECT
        </p>
        <div className="text-quaternary flex gap-2">
          <a href="https://twitter.com/junaidahmedsd" aria-label="Twitter" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-sky-400 hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" />
          </a>
          <a
            href="https://www.linkedin.com/in/junaidahmedsyed/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-[#0a66c2] hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" />
          </a>
          <a href="mailto:sjunaid626@gmail.com" aria-label="Mail" target="_blank" rel="noreferrer">
            <RiMailSendLine className="hover:text-red-400 hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" />
          </a>
          <a href="https://github.com/iamsjunaid" aria-label="GitHub" target="_blank" rel="noreferrer">
            <TbBrandGithubFilled className="hover:text-black hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" />
          </a>
          <a
            href="https://wellfound.com/u/junaid-ahmed-shakeel-ahmed-syed"
            aria-label="Wellfound"
            target="_blank"
            rel="noreferrer"
          >
            <FaAngellist className="hover:text-black hover:cursor-pointer text-2xl hover:cursor-pointer transition duration-500 ease-in-out" target="_blank" rel="noreferrer" />
          </a>
        </div>
        <button
          className="border rounded-md border-secondary px-4 py-2 text-secondary bg-white text-left w-max see-project-btn hover:cursor-pointer hover:bg-secondary hover:text-white transition duration-500 ease-in-out"
          type="button"
          title="Navigate to google docs"
        >
          <a href="https://drive.google.com/file/d/1QO10f1kOZir2ML-7CgZoMnoS8Yi4kf5r/view?usp=sharing" target="_blank" rel="noreferrer">Get My Resume</a>
        </button>
      </div>
      <div className="w-full sm:h-auto">
        <ul className="flex flex-col gap-4">
          <li className="border-b-2">
            <div className="flex justify-between items-center py-2">
              <p className="text-[20px] leading-[24px]">Languages</p>
              <span>
                {languagesButtonClicked ? (
                  <HiChevronDown
                    onClick={handleShowLanguages}
                    className="text-2xl hover:cursor-pointer"
                  />
                ) : (
                  <HiChevronRight
                    onClick={handleShowLanguages}
                    className="text-2xl hover:cursor-pointer"
                  />
                )}
              </span>
            </div>
            <div
              className={`flex gap-4 flex-wrap ${
                showLanguages === true ? 'flex-row' : 'hidden'
              }`}
            >
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex flex-col justify-center items-center">
                <img src={html} alt="html" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={css} alt="css" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={js} alt="js" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={ruby} alt="ruby" className="w-[50px] h-[50px]" />
              </div>
            </div>
          </li>
          <li className="border-b-2">
            <div className="flex justify-between items-center py-2">
              <p className="text-[20px] leading-[24px]">Frameworks</p>
              <span>
                {FramworksButtonClicked ? (
                  <HiChevronDown
                    onClick={handleShowFramworks}
                    className="text-2xl hover:cursor-pointer"
                  />
                ) : (
                  <HiChevronRight
                    onClick={handleShowFramworks}
                    className="text-2xl hover:cursor-pointer"
                  />
                )}
              </span>
            </div>
            <div
              className={`flex gap-4 flex-wrap ${
                showFrameworks === true ? 'flex-row' : 'hidden'
              }`}
            >
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={react} alt="react" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={redux} alt="redux" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={next} alt="nextjs" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={tailwind} alt="tailwindcss" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={bootstrap} alt="bootstrap" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img
                  src={ror}
                  alt="ruby-on-rails"
                  className="w-[50px] h-[50px]"
                />
              </div>
            </div>
          </li>
          <li className="border-b-2">
            <div className="flex justify-between items-center py-2">
              <p className="text-[20px] leading-[24px]">Databases</p>
              <span>
                {databasesButtonClicked ? (
                  <HiChevronDown
                    onClick={handleShowDatabases}
                    className="text-2xl hover:cursor-pointer"
                  />
                ) : (
                  <HiChevronRight
                    onClick={handleShowDatabases}
                    className="text-2xl hover:cursor-pointer"
                  />
                )}
              </span>
            </div>
            <div
              className={`flex gap-4 flex-wrap ${
                showDatabases === true ? 'flex-row' : 'hidden'
              }`}
            >
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img
                  src={postgres}
                  alt="postgres"
                  className="w-[50px] h-[50px]"
                />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={mysql} alt="mysql" className="w-[50px] h-[50px]" />
              </div>
            </div>
          </li>
          <li className="border-b-2">
            <div className="flex justify-between items-center py-2">
              <p className="text-[20px] leading-[24px]">Version Control Tools and IDEs</p>
              <span>
                {toolsButtonClicked ? (
                  <HiChevronDown
                    onClick={handleShowTools}
                    className="text-2xl hover:cursor-pointer"
                  />
                ) : (
                  <HiChevronRight
                    onClick={handleShowTools}
                    className="text-2xl hover:cursor-pointer"
                  />
                )}
              </span>
            </div>
            <div
              className={`flex gap-4 flex-wrap ${
                showTools === true ? 'flex-row' : 'hidden'
              }`}
            >
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img
                  src={git}
                  alt="git"
                  className="w-[50px] h-[50px]"
                />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={github} alt="github" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={vscode} alt="vscode" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={responsive} alt="responsive" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={tdd} alt="tdd" className="w-[50px] h-[50px]" />
              </div>
              <div className="h-[80px] w-[80px] bg-[#f4f5f7] rounded-[50%] inline-block flex justify-center items-center">
                <img src={rspec} alt="rspec" className="w-[50px] h-[50px]" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
